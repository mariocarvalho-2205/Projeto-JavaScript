// declaração de variaveia

var

a, b: integer;

begin
    a:=10;
    b:=30;

    if (media(8, close) > media(20, close)) then  // media movel
        begin
        paintBar(clBlue);
        end
    else
        begin
            paintBar(clRed);
        end;

end;

// estrutura while

var 

a, b: integer;

begin 
    a:=1;
    b:=5;

    while (a < 10) do
        begin

            a:= a + 1;
            plot(a);
        end;
end;

// estrutura for

var 

initial, finale: integer;

begin 


    for initial:=0 to finale do
        begin

            // o for não precisa incrementar a variavel
            plot(initial);
        end;
end;

// programando uma media movel de 8mma

var 
soma: float;

begin
    soma:=(close[0]+close[1]+close[2]+close[3]+close[4]+close[5]+close[6]+close[7])/ 8;
    plot(soma);

end

// media com input 
input
    periodoMedia(9)
    precoFechamento(close)

var
    referencia: integer;
    soma: float;

begin

    if(CurrentBar>=peridoMedia-1) then
        begin
            soma:=0

            for referencia:=0 to peridoMedia-1 do
                begin
                    soma:=soma+precoFechamento[referencia]
                end;
            plot(soma/peridoMedia)
        end;

end;
// =-=-=-=-=-=-=-=-=-=-=-=-=-=-

// funções exclusiva, so podem ser usada no arquivo salvo

// declaração de variaveis 
 var ret: integer;

// declaração da função
 function somar (valorA: integer; valorB :integer) :integer
    begin
        somar:=valorA + valorB;

    end;

// inicio do programa
begin
    plot(somar(5, 6));

end;


=-=-=-=-=-=-= exportando ou importando função chama a função e abre o parenteses

input

    numeroA(5);
    numeroB(6);

var
    resultado:integer;

begin
    resultado:=numeroA+numeroB;
    plot(resultado)
end;




