import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { userId, message, metadata } = await req.json();

    console.log("Chat request received:", { userId, message, metadata });

    // Check if in maintenance mode
    const MAINTENANCE = Deno.env.get("MAINTENANCE") === "true";
    const N8N_WEBHOOK_URL = Deno.env.get("N8N_WEBHOOK_URL");

    // Fallback to WhatsApp if n8n is not configured or in maintenance
    if (MAINTENANCE || !N8N_WEBHOOK_URL) {
      console.log("Maintenance mode or n8n not configured - returning fallback");
      return new Response(
        JSON.stringify({
          ok: true,
          reply: "No momento nosso assistente está em manutenção. Por favor, clique no botão abaixo para falar diretamente no WhatsApp! 💬"
        }),
        {
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Call n8n webhook
    console.log("Calling n8n webhook:", N8N_WEBHOOK_URL);
    
    const n8nResponse = await fetch(N8N_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId,
        message,
        metadata: metadata || {}
      }),
    });

    if (!n8nResponse.ok) {
      console.error("n8n webhook error:", n8nResponse.status, n8nResponse.statusText);
      throw new Error(`n8n webhook returned ${n8nResponse.status}`);
    }

    const n8nData = await n8nResponse.json();
    console.log("n8n response:", n8nData);

    // Extract reply from n8n response
    // The n8n workflow should return: { ok: true, reply: "response text" }
    const reply = n8nData.output || n8nData.reply || n8nData.message || "Desculpe, não consegui processar sua mensagem.";

    return new Response(
      JSON.stringify({
        ok: true,
        reply: reply
      }),
      {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );

  } catch (error) {
    console.error("Error in chat function:", error);
    
    // Return fallback response on error
    return new Response(
      JSON.stringify({
        ok: true,
        reply: "Ops! Tive um problema para processar sua mensagem. Por favor, tente novamente ou clique no botão para falar no WhatsApp."
      }),
      {
        status: 200, // Return 200 to avoid frontend errors
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
