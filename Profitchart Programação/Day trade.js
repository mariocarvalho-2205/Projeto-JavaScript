/*

! Operações para Day trade

begin 

        // Bloco de entrada nas operações
        if (BuyPosition = 0) and (SellPosition = 0) and (time <= 1200) then

            begin
                * Condição de compra
                if (condição para compra - estrategia) then
                    begin
                        // entrada compra
                        BuyStop(high, high)
                    end;
                * Condição de venda
                if (condição para venda - estrategia) then
                    begin
                        // entrada compra
                        BuyStop(low, low)
                    end;


                * Condição de venda

            end;
        // Bloco de saida - Stops e Alvos 

        // Posição comprada
        if (BuyPosition = 1) then

            begin
                // Alvo
                SellToCoverStop(BuyPrice+400, BuyPrice+400) // swingtrade
                // Stop
                SellToCoverStop(BuyPrice-400, BuyPrice-400) // swingtrade
            end;

        // Posição vendida
        if (SellPosition = 1) then

            begin
                // Alvo
                BuyToCoverStop(BuyPrice-400, BuyPrice-400)  // swingtrade
                // Stop
                BuyToCoverStop(BuyPrice+400, BuyPrice+400)  // swingtrade
            end;

        // Intervalo de Encerramento das operações abertas compra ou venda

        if (time >= 1700) then
            begin
                ClosePosition;
            end;
end;


*




*/