/*
Setup Dave Landry
var

    candle: interger;

begin

    // bloco de entrada nas operações
    if (BuyPosition = 0) and (SellPosition = 0) then     // BuyPosition = posição aberta, (0) não tem posição aberta
        begin
            candle:=0;

            // Condição de compra
            if (low[0] < low[1])  // low = minima
            and (low[0] < low[2])
            and (close > media(21, close))         // close = fechamento e media(periodos, close) ou mediaExp
            then
                BuyStop(high+0.02, high+0.02);  // BuyStop = serve para posicionar uma ordem de compra(entrada), 
                                                // em pontos especificos do grafico
        end

    // bloco de saida da operação
    if(BuyPosition = 1) then

        begin
            candle:=candle+1;
            // consição de saida Gain
            // SellToCoverStop = envia uma ordem de venda para sair de uma operação de compra
            
            // Alvo
            SellToCoverStop((((high[candle]-low[candle]) * 2)+high[candle])+10000,(((high[candle]-low[candle]) * 2)+high[candle]));  // verificar o tamanho do cancle de entrada


            // stop
            SellToCoverStop(abs((high[candle]-low[candle]*2)-low[candle]),abs((high[candle]-low[candle]*2)-low[candle])-10000);
        end;
end;





*/