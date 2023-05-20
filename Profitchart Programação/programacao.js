/*

var

    candle: interger;

begin
    if (BuyPosition = 0) then     // BuyPosition = posição aberta, (0) não tem posição aberta
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
    if(BuyPosition = 1) then

        begin
            candle=candle+1;
            // consição de saida Gain
            // SellToCoverStop = envia uma ordem de venda para sair de uma operação de compra
            
            // Alvo
            SellToCoverStop(((high-low) * 2));  // verificar o tamanho do cancle de entrada

        end;
end;





*/