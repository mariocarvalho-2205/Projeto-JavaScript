//IIME -  Funções Imediatas 
(function (o) {
    function name (n) {
        console.log('função ', n)
    }

    function name2 (m) {
        name('name2 mais '+ m )
    }
    name2(o)
}) ('joao')