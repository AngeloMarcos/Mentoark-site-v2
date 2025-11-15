import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Download, Loader2 } from "lucide-react";
import { removeBackground, loadImage } from "@/utils/removeBackground";
import { toast } from "sonner";

export const ImageBackgroundRemover = () => {
  const [originalImage, setOriginalImage] = useState<string | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      setProcessedImage(null);
      const reader = new FileReader();
      reader.onload = (e) => {
        setOriginalImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveBackground = async () => {
    if (!selectedFile) {
      toast.error("Por favor, selecione uma imagem primeiro");
      return;
    }

    setIsProcessing(true);
    try {
      toast.info("Processando imagem... Isso pode levar alguns segundos");
      
      const imageElement = await loadImage(selectedFile);
      const resultBlob = await removeBackground(imageElement);
      
      const url = URL.createObjectURL(resultBlob);
      setProcessedImage(url);
      
      toast.success("Fundo removido com sucesso!");
    } catch (error) {
      console.error("Error:", error);
      toast.error("Erro ao processar imagem. Tente novamente.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!processedImage) return;
    
    const link = document.createElement('a');
    link.href = processedImage;
    link.download = 'mascote-sem-fundo.png';
    link.click();
    
    toast.success("Download iniciado!");
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl p-6 md:p-8">
        <h1 className="text-3xl font-bold text-center mb-2">Remover Fundo da Imagem</h1>
        <p className="text-muted-foreground text-center mb-8">
          Processe a imagem do mascote para remover o fundo
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Original Image */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Imagem Original</h3>
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
              {originalImage ? (
                <img src={originalImage} alt="Original" className="w-full h-full object-contain" />
              ) : (
                <div className="text-center text-muted-foreground">
                  <Upload className="w-12 h-12 mx-auto mb-2" />
                  <p>Nenhuma imagem selecionada</p>
                </div>
              )}
            </div>
          </div>

          {/* Processed Image */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Sem Fundo</h3>
            <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden relative"
                 style={{
                   backgroundImage: 'linear-gradient(45deg, #ccc 25%, transparent 25%), linear-gradient(-45deg, #ccc 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #ccc 75%), linear-gradient(-45deg, transparent 75%, #ccc 75%)',
                   backgroundSize: '20px 20px',
                   backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                 }}>
              {processedImage ? (
                <img src={processedImage} alt="Processed" className="w-full h-full object-contain relative z-10" />
              ) : (
                <div className="text-center text-muted-foreground relative z-10 bg-background/80 p-4 rounded">
                  {isProcessing ? (
                    <>
                      <Loader2 className="w-12 h-12 mx-auto mb-2 animate-spin" />
                      <p>Processando...</p>
                    </>
                  ) : (
                    <p>Processamento pendente</p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileSelect}
              className="hidden"
            />
            <Button variant="outline" className="w-full sm:w-auto cursor-pointer" asChild>
              <span>
                <Upload className="w-4 h-4 mr-2" />
                Selecionar Imagem
              </span>
            </Button>
          </label>

          <Button
            onClick={handleRemoveBackground}
            disabled={!selectedFile || isProcessing}
            className="w-full sm:w-auto"
          >
            {isProcessing ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processando...
              </>
            ) : (
              "Remover Fundo"
            )}
          </Button>

          <Button
            onClick={handleDownload}
            disabled={!processedImage}
            variant="secondary"
            className="w-full sm:w-auto"
          >
            <Download className="w-4 h-4 mr-2" />
            Download
          </Button>
        </div>

        <p className="text-sm text-muted-foreground text-center mt-6">
          💡 Dica: Após processar, faça o download e substitua a imagem em public/images/mascote-mentoark.png
        </p>
      </Card>
    </div>
  );
};
