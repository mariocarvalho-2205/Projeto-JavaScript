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

            // Condição de venda
            if (high[0] > high[1])
            and (high[0] > high[2])
            and (close < media(21, close))
            then
                SellShortStop(low-0.02, low-0.02);

        end

    // bloco de saida da operação
    if(BuyPosition = 1) then

        begin
            candle:=candle+1;
            // consição de saida Gain
            // SellToCoverStop = envia uma ordem de venda para sair de uma operação de compra
            
            // Alvo
            SellToCoverStop((((high[candle]-low[candle]) * 2)+high[candle])+10000,
            (((high[candle]-low[candle]) * 2)+high[candle]));  // verificar o tamanho do cancle de entrada


            // stop
            SellToCoverStop(abs((high[candle]-low[candle] * 1)-low[candle]),
            abs((high[candle]-low[candle]*2)-low[candle])-10000);
        end;

    if (SellPosition = 1) then
        begin
            candle:=candle+1;

            // alvo
            BuyToCoverStop(abs(((high[candle]-low[candle]) * 2)-low[candle])-10000,
            abs(((high[candle]-low[candle]*2)-low[candle]));

            // Stop
            BuyToCoverStop(((high[candle]-low[candle]) * 1)+high[candle],
            (((high[candle]-low[candle]) * 2)+high[candle])+10000);  // verificar o tamanho do cancle de entrada
        end;
end;



// tipos de ordem para entrada na compra

* Ordens de entrada na operação
BuyAtMarket; // compra no fechamento do candle que der as condições de entrada no grafico
BuyStop(ponto de entrada, ponto de entrada limite); // compra em determindado ponto especifico  Essa ordem precisa de dois parametros

* Ordens de saida da operação
SellToCoverAtMarket;  //
SellToCoverStop();  //
ClosePosition;  //


// Tipos de entrada para compra

begin 
    if (BuyPosition = 0) then
        begin
            if (SlowStochastic(5) < 30) then
                begin
                    //BuyAtMarket;
                    BuyStop(close, close);
                    PaintBar(clRed);
                end;

        end;

    if (BuyPosition = 1) then
      begin
        if (SlowStochastic(5) > 70) then

        begin

            //SelltoCoverAtMarket;  //1
            SellToCoverStop(open, open);    //2
            //ClosePosition;

        end; 
      end;
        
end; 

// tipos de ordem para entrada na venda

* Ordens de entrada na operação
SellShortAtMarket; // compra no fechamento do candle que der as condições de entrada no grafico
SellShortStop(ponto de entrada, ponto de entrada limite); // compra em determindado ponto especifico  Essa ordem precisa de dois parametros

* Ordens de saida da operação
BuyToCoverAtMarket;  //
BuyToCoverStop();  //
ClosePosition;  //

! Tipos de alvo

// Bloco de Saida

    if (BuyPosition  = 1) then
    begin
    // Alvo
          SellToCoverStop((BuyPrice+4.01)+100000, BuyPrice+4.01);
          * financeiro - BuyPrice é o preço de entrada na operação, preço de compra da nota de corretagem
          * Valores financeiro
          * 4.00  - equivale a R$ 400,00 financeiro
          * 400 para indice equivale a 400 pontos 
          * 4 equivale a 4 pontos no dolar
    //Stop
          SellToCoverStop(BuyPrice-2.99, (BuyPrice-2.99)-100000);   
     
    end;

    if (SellPosition = 1) then
    begin
    ! usado para swing trade o valor adicionado e para sair quando tiver um gap
    * financeiro
    // Alvo
        BuyToCoverStop((SellPrice-4.01)-100000, (SellPrice-4.01);  
          
    // Stop
        BuyToCoverStop(SellPrice+2.99, (SellPrice+2.99)+100000);
    end;


    -0-0-0-
* pontos indice e dolar
    // SellToCoverStop(BuyPrice+((high - low)*2), BuyPrice+((high - low)*2));
//          SellToCoverStop(BuyPrice+((high - low)*2), BuyPrice+((high - low)*2));
            SellToCoverStop((BuyPrice+6)+50, BuyPrice+6);
    //Stop
          SellToCoverStop(BuyPrice-2, (BuyPrice-2)-50);   
     
    end;

    if (SellPosition = 1) then
    begin
    // Alvo
        BuyToCoverStop((SellPrice-2)-50, SellPrice-2);
          
    // Stop
        BuyToCoverStop(SellPrice+2, (SellPrice+2)+50);
    end;

    Alvos fixo usamos uma variavel de contagem para referenciar o candle de entrada

    // Alvo
        BuyToCoverStop((BuyPrice+AvgTrueRange(10, 0)[candle])+10000, BuyPrice+AvgTrueRange(10, 0)[candle]);


! Stops moveis utilizando HiloActivator como exemplo

// Bloco de saida -- Versão 1.0
// Compra
if (BuyPosition = 1) then
    begin
        candle := candle + 1;
  
        // Stop Padrão fixo v 1.0
        SellToCoverStop(BuyPrice-400, (BuyPrice-400)-10000);

        // Stop movel inicial V1.0 - Será necessario criar uma variavel para armazenar o Hilo
        * Variavel Hilo
        HiloAbaixoFechamento : float;

        if (close > BuyPrice+200) then
            begin
                * Dessa forma o stop está subindo e saindo na virada do hilo no fechamento do candle
                SellToCoverStop(HiloActivator(7), HiloActivator(7)-10000)  
            end;


    end



// Bloco de saida -- Versão 2.0
// Compra
if (BuyPosition = 1) then
    begin
        candle := candle + 1;
    
        // Stop movel inicial V 2.0 // so movera se atender as duas condições
        if (close > BuyPrice+200) and (close > HiloActivator(7)) then
            begin
                * Atribuindo valor a variavel do hilo
                HiloAbaixoFechamento := HiloActivator(7);  // variavel declarada para guardar valor do hilo
                end;
            
            if (close > BuyPrice+200) then
                begin
                * Dessa forma o stop será coduzido pelo Hilo e irar parar quando o Hilo virar de lado
                SellToCoverStop(HiloAbaixoFechamento, HiloAbaixoFechamento-100000);  
                end;

        ! para nosso stop fixo, precisaremos criar uma condição agora
        // Stop fixo para V 2.0
        if (close<BuyPrice+200) then
            begin
                SellToCoverStop(BuyPrice-400, (BuyPrice-400)-10000);
            end;


    end;


// Bloco de saida -- Versão 3.0
* Nessa versão será corrigido o movimento do stop mesmo que o preço chegue ate a primeira condição e volte,
* Sendo conduzido automaticamente pelo hilo sem precisar referenciar o fechamento dos candles
* para isso sera declarada uma varivel como inteiro para usarmos as chaves.

chave: integer;
// Compra
if (BuyPosition = 1) then
    begin
        candle := candle + 1;
    
        // Stop movel inicial V 2.0 // so movera se atender as duas condições
        if (close > BuyPrice+200) and (close > HiloActivator(7)) then
            begin
                * Atribuindo valor a variavel do hilo
                StopQueSobe := HiloActivator(7);  // variavel declarada para guardar valor do hilo
                chave:=1;  nesse ponto sera atribuido a variavel chave o valor 1
                end;
            // Stop Hilo
            ! Importante depois que for encerrada as operações, e necessario zerar a varivel chave 
            ! No bloco onde a variavel candle recebe o valor zero
            if (chave = 1) then
                begin
                * Dessa forma o stop será coduzido pelo Hilo ate ser stopado
                SellToCoverStop(StopQueSobe, StopQueSobe-100000);  
                end;

            
            // Stop fixo principal
            if (chave=0) then
                begin
                    SellToCoverStop(BuyPrice-400, (BuyPrice-400)-10000);
                end;


    end

// Venda
if (SellPosition = 1) then
    begin
        candle := candle + 1;
    
        // Stop movel inicial V 2.0 // so movera se atender as duas condições
        if (close < SellPrice-200) and (close < HiloActivator(7)) then
            begin
                * Atribuindo valor a variavel do hilo
                StopQueDesce := HiloActivator(7);  // variavel declarada para guardar valor do hilo
                chave:=1;  nesse ponto sera atribuido a variavel chave o valor 1
                end;
            // Stop Hilo
            ! Importante depois que for encerrada as operações, e necessario zerar a varivel chave 
            ! No bloco onde a variavel candle recebe o valor zero
            if (chave = 1) then
                begin
                * Dessa forma o stop será coduzido pelo Hilo ate ser stopado
                BuyToCoverStop(StopQueDesce, StopQueDesce+100000);  
                end;

            
            // Stop fixo principal
            if (chave=0) then
                begin
                    BuyToCoverStop(SellPrice+400, (SellPrice+400)+100000);
                end;


    end
*/