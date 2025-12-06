import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Bot, Settings, MessageSquare } from "lucide-react";

const AgentBuilder = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header simplificado */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50">
        <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="/images/logo-mentoark.png" 
              alt="MentoArk" 
              className="h-8 md:h-10 object-contain"
            />
          </Link>
          
          <Link to="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Voltar ao site
            </Button>
          </Link>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="container mx-auto px-4 pt-24 pb-12">
        {/* Título da página */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-4">
            <Bot className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Configure seu Agente de Atendimento
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Personalize o comportamento, tom de voz e respostas do seu assistente virtual de forma simples e rápida.
          </p>
        </div>

        {/* Cards de seções (placeholder para formulários futuros) */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
          <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">Configurações Gerais</CardTitle>
                  <CardDescription>Nome, avatar e identidade do agente</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Defina como seu agente se apresenta aos clientes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10">
                  <MessageSquare className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <CardTitle className="text-lg">Mensagens Padrão</CardTitle>
                  <CardDescription>Saudações e respostas automáticas</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Configure mensagens de boas-vindas e respostas frequentes.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 border-border/50 hover:border-primary/50 transition-colors md:col-span-2 lg:col-span-1">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-orange-500/10">
                  <Bot className="h-5 w-5 text-orange-500" />
                </div>
                <div>
                  <CardTitle className="text-lg">Comportamento IA</CardTitle>
                  <CardDescription>Tom de voz e personalidade</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Ajuste como a IA responde e interage com seus clientes.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Área reservada para formulário */}
        <div className="mt-12 max-w-3xl mx-auto">
          <Card className="bg-card/30 border-dashed border-2 border-border/50">
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">
                🚧 Formulário de configuração será implementado aqui
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AgentBuilder;
