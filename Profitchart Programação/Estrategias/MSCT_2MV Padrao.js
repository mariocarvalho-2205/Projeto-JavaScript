/*
input

Periodo2MV(20);
Alvo(100);
Stop(100);

var

MediaMax, MediaMin: float;



begin
MediaMax := MediaExp(Periodo2MV, High);
MediaMin := MediaExp(Periodo2MV, Low);


if (IsBought) then
    begin
    // Alvo
        SellToCoverLimit(BuyPrice + Alvo, 1);
    // Stop
        SellToCoverStop(BuyPrice - Stop, BuyPrice - Stop - 200, 1);

    end;

if (IsSold) then

    begin
    // Alvo
        BuyToCoverLimit(BuyPrice - Alvo, 1);
    // Stop
        BuyToCoverStop(BuyPrice + Stop, BuyPrice + Stop + 200, 1);

    end;


if (HasPosition = false) then
    begin
        if (close > MediaMax) and (close > open) then
            BuyAtMarket(1);

         if (close < MediaMin) and (close < open) then
            SellShortAtMarket(1);
    end;


end;


*/
