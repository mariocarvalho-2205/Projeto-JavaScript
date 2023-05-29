/*


// * Estrategia de compra e venda Dave Landry

input

mediaCurta(21);
mediaLonga(50);

var

candle : integer;
alvoCompra : float;

begin

    // Bloco de Entrada
    if (BuyPosition = 0) and (SellPosition = 0) then
        begin

            candle:=0;

            // condição de compra
            if (low[0] < low[1])
                and (low[0] < low[2])
                and (close > media(21, close))
                and (media(21, close) > media(50, close))  // criterio adicional para validar tendencia
                and (media(50, close) > media(80, close))  // criterio adicional para validar tendencia
            then
                BuyStop(high+0.02,high+0.02);  // determina a entrada da compra em preços especificos
            
            // Condição de Venda

            if (high[0] > high[1])
                and (high[0] > high[2])
                and (close < media(21, close))
                and (media(21, close) < media(50, close))  // criterio adicional para validar tendencia
                and (media(50, close) < media(80, close))  // criterio adicional para validar tendencia
            then
                SellShortStop(low-0.02, low-0.02);

        end;

    
    // Bloco de Saida

    if (BuyPosition = 1) then
        begin

        candle:=candle+1;
        alvoCompra:=(((high[candle]-low[candle])*2)+high[candle]);
        
            // Alvos e Stops para compra
            // Alvo
            SellToCoverStop((((high[candle]-low[candle])*2)+high[candle])+100000,
            (((high[candle]-low[candle])*2)+high[candle]));

            // Stop

            SellToCoverStop(abs(((high[candle]-low[candle])*1)-low[candle]),
            abs(((high[candle]-low[candle])*1)-low[candle])-100000);

        end;

    if (SellPosition = 1) then
        begin
            candle:=candle+1;

            // Alvos e Stops para Venda

            // Alvo

            BuyToCoverStop(abs(((high[candle]-low[candle])*2)-low[candle])-10,
            abs(((high[candle]-low[candle])*2)-low[candle]));

            // Stop

            BuyToCoverStop((((high[candle]-low[candle])*2)+high[candle]),
            (((high[candle]-low[candle])*2)+high[candle])+100000);
        end;



end;














*/