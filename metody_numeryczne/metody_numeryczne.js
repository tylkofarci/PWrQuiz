var test = {
    "time": 15,
    "testQuestionCount": 30,
    "questionList": [
        {
            "question": "1. Kwadratura Gaussa w odróżnieniu od kwadratury Newtona-Cotesa są zaliczane do wolnych algorytmów obliczeniowych.",
            "tip": "",
            "answer": [
                {"text": "Prawda", "valid": false},
                {"text": "Fałsz", "valid": true}
            ]
        },
        {
            "question": "2. W przypadku programowej realizacji działań arytmetycznych (procesor) dokładność operatorów odpowiada dokładności reprezentacji zmiennych typu rzeczywistego, dla przyjętego słowa maszynowego.",
            "tip": "Konspekt 3, Slajd 23",
            "answer": [
                {"text": "Prawda", "valid": true},
                {"text": "Fałsz", "valid": false}
            ]
        },
        {
            "question": "3. Czy epsilon maszynowy dla operatora dodawania jest wartością niezależną od typu zmiennej dla której jest wyznaczany.",
            "tip": "Konspekt 3, Slajd 24, 25, 26, 27",
            "answer": [
                {"text": "Prawda", "valid": true},
                {"text": "Fałsz", "valid": false}
            ]
        },
        {
            "question": "4. Liczby losowe mogą być generowane na podstawie.",
            "tip": "Konspekt 13, Slajd 2",
            "answer": [
                {"text": "Wskazań liczby impulsów promieniowania jonizującego", "valid": true},
                {"text": "Specjalnie opracowanych algorytmów dyskretnych", "valid": false},
                {"text": "Danych pomiarowych z półprzewodnikowych diod szumowych", "valid": true},
                {"text": "Równań stochastycznych", "valid": false}
            ]
        },
        {
            "question": "5. Dla liniowego generatora LCG (m, a, c) =LCG(12,13,7) możliwe zbiory generowanych liczb całkowitych to:",
            "tip": "Konspekt 13, Slajd 12",
            "answer": [
                {"text": "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13", "valid": false},
                {"text": "0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11", "valid": true},
                {"text": "0, 1, 3, 5, 5, 7, 9, 9, 11", "valid": false},
                {"text": "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12", "valid": false}
            ]
        },
        {
            "question": "6. Algorytmem stochastycznym nazywamy taki algorytm dla którego dla tych samych danych wejściowych zmiana stanu maszyny jest całkowicie przypadkowy.",
            "tip": "Konspekt 1, Slajd 4",
            "answer": [
                {"text": "Prawda", "valid": true},
                {"text": "Fałsz", "valid": false}
            ]
        },
        {
            "question": "7. Dla wielomianu rzędu drugiego otrzymuje się wzory przybliżonego całkowania metodą trapezów",
            "tip": "Konspekt 10, Slajd 3",
            "answer": [
                {"text": "Prawda", "valid": false},
                {"text": "Fałsz", "valid": true}
            ]
        },
        {
            "question": "8. Liczba stało pozycyjna 987.25 została znormalizowana zgodnie z normą IEEE-854. Która prezentacja jest prawdziwa",
            "tip": "",
            "answer": [
                {"text": "Żadna z wymienionych", "valid": false},
                {"text": "987,250E+0", "valid": false},
                {"text": "98725,0E-2", "valid": false},
                {"text": "9,87250E+2", "valid": true},
                {"text": "0,98725E+3", "valid": false}
            ]
        },
        {
            "question": "9. Czy algorytm numerycznie poprawny jest zawsze numerycznie stabilny",
            "tip": "Konspekt 1, Slajd 8, 9",
            "answer": [
                {"text": "Algorytm numerycznie poprawny jest również stabilny ale tylko dla stabilnych danych wejściowych", "valid": false},
                {"text": "Algorytm numerycznie poprawny zawsze jest algorytmem numerycznie stabilnym", "valid": true},
                {"text": "Algorytm numerycznie poprawny nie zawsze jest algorytmem numerycznie stabilnym", "valid": false},
                {"text": "Poprawność algorytmu nie wyklucza jego stabilności", "valid": false}
            ]
        },
        {
            "question": "10. Które stwierdzenia są nieprawdziwe",
            "tip": "Konspekt 1, Slajd 8, 9",
            "answer": [
                {"text": "W każdym przypadku obliczeń numerycznych mamy do czynienia ze skończonym zbiorami wartości", "valid": false},
                {"text": "Liczba binarna (o określonej liczbie bitów) nie umożliwia zapisu dowolnej wartości numerycznej", "valid": false},
                {"text": "Liczby z zakresu stało pozycyjnych zawsze są zbiorami skończonymi i przeliczalnymi", "valid": false},
                {"text": "Obliczenia zmiennopozycyjne podlegają takim samym rodzajów błędów  jak stało pozycyjne", "valid": true}
            ]
        },
        {
            "question": "11. W jaki sposób można wyznaczyć błąd bezwzględny obliczanych wartości numerycznych nie znając odpowiadających im wartości dokładnych",
            "tip": "",
            "answer": [
                {"text": "Przyjmując jako wartości odniesienia wartości pochodzące z drugiego zależnego algorytmu", "valid": false},
                {"text": "Nie można wyznaczyć bledów bezwzględnych bez znajomości wartości dokładnych", "valid": false},
                {"text": "Przyjmując jako wartości odniesienia wartości pochodzące z odmiennego niezależnego algorytmu", "valid": true},
                {"text": "Przyjmując jako wartości odniesienia wartości pochodzące z tego samego algorytmu", "valid": false}
            ]
        },
        {
            "question": "12. Który indeks tablicy V[z, t] odpowiada za kierunek równoległy od osi y",
            "tip": "",
            "answer": [
                {"text": "Z", "valid": true},
                {"text": "X", "valid": false},
                {"text": "T", "valid": false},
                {"text": "Żaden", "valid": false}
            ]
        },
        {
            "question": "13. Czy obliczenia zmiennopozycyjne mogą być wykonywane na dowolnym poziomie dokładności?",
            "tip": "",
            "answer": [
                {"text": "Prawda", "valid": false},
                {"text": "Fałsz", "valid": true}
            ]
        },
        {
            "question": "14. Czy rozwiązanie układów równań różniczkowych dotyczy wyłącznie",
            "tip": "",
            "answer": [
                {"text": "Obszarów płaskich", "valid": false},
                {"text": "Obszarów ograniczonych", "valid": true},
                {"text": "Obszarów nieograniczonych", "valid": false},
                {"text": "Obszarów wypukłych", "valid": false}
            ]
        },
        {
            "question": "15. Dla 32 bitowego słowa maszynowego przyjęto mantysę o szerokości 26 bitów. Ile wynosi dziesiętna wartość przesunięcia fazowego bias?",
            "tip": "Konspekt 3, Slajd 6",
            "answer": [
                {"text": "5", "valid": false},
                {"text": "16", "valid": false},
                {"text": "Żadna z podanych wartości", "valid": false},
                {"text": "14", "valid": false},
                {"text": "15", "valid": true}
            ]
        },
        {
            "question": "16. Czy pierwsza opublikowana tablica liczb losowych to tablica Gaussa?",
            "tip": "Konspekt 13, Slajd 5",
            "answer": [
                {"text": "Prawda", "valid": false},
                {"text": "Fałsz", "valid": true}
            ]
        },
        {
            "question": "17. Wskaźnik uwarunkowania macierzy A, to iloczyn normy macierzy, oraz normy macierzy odwrotnej",
            "tip": "Konspekt 6, Slajd 2",
            "answer": [
                {"text": "Prawda", "valid": true},
                {"text": "Fałsz", "valid": false}
            ]
        },
        {
            "question": "18. W wyniku konwersji z układu 10 otrzymano liczbę 111100101.110101 Na jaki układ konwersja mogła zostać wykonana?",
            "tip": "Największa cyfra liczby < Odpowiedź",
            "answer": [
                {"text": "O podstawie 2", "valid": true},
                {"text": "O podstawie 3", "valid": true},
                {"text": "O podstawie 4", "valid": true},
                {"text": "O podstawie 5", "valid": true},
                {"text": "O podstawie 6", "valid": true},
                {"text": "O podstawie 7", "valid": true},
                {"text": "O podstawie 8", "valid": true},
                {"text": "O podstawie 9", "valid": true},
                {"text": "Żaden z powyższych", "valid": false}
            ]
        },
        {
            "question": "19. Czy epsilon maszynowy jest wartością niezależną od typu dla którego jest wyznaczany",
            "tip": "Konspekt , Slajd 23, 24, 25, 26, 27",
            "answer": [
                {"text": "Prawda", "valid": false},
                {"text": "Fałsz", "valid": true}
            ]
        },
        {
            "question": "20. Liczby rzeczywiste nie mogą być przetwarzane w systemie stało pozycyjnym",
            "tip": "Konspekt 2, Slajd 14",
            "answer": [
                {"text": "Prawda", "valid": false},
                {"text": "Fałsz", "valid": true}
            ]
        },
        {
            "question": "21. Z algorytmem Gilla-Mollera są związane następujące określenia",
            "tip": "Konspekt 4, Slajd 4",
            "answer": [
                {"text": "Wynik końcowy algorytmu nie uwzględnia występujących błędów zaokrągleń", "valid": false},
                {"text": "Wynik końcowy algorytmu uwzględnia występujące błędy zaokrągleń", "valid": true},
                {"text": "Kolejność operacji arytmetycznych jest nieistotna dla algorytmu", "valid": false},
                {"text": "Kolejność operacji arytmetycznych jest istotna dla algorytmu", "valid": true}
            ]
        },
        {
            "question": "22. Liczby pseudolosowe nie mogą być generowane za pomocą algorytmów deterministycznych",
            "tip": "Konspekt 13, Slajd 2",
            "answer": [
                {"text": "Prawda", "valid": false},
                {"text": "Fałsz", "valid": true}
            ]
        },
        {
            "question": "23. Kwadratury z przedziału [-1,1] z funkcją wagową w(x)=1/sqrt(1-x^2) to kwadratury Gaussa – Czybyszewa",
            "tip": "",
            "answer": [
                {"text": "Prawda", "valid": true},
                {"text": "Fałsz", "valid": false}
            ]
        },
        {
            "question": "24. Liczby całkowite (integer) nie mogą być przetwarzane w systemie zmiennopozycyjnym",
            "tip": "",
            "answer": [
                {"text": "Prawda", "valid": false},
                {"text": "Fałsz", "valid": true}
            ]
        },
        {
            "question": "25. Czy druga pochodna cząstkowa w kierunku osi y",
            "tip": "",
            "answer": [
                {"text": "Nie jest bezpośrednio zależna od położenia węzłów siatki", "valid": false},
                {"text": "Zależy od odległości między węzłami siatki w kierunku osi x", "valid": false},
                {"text": "Zależy od kwadratu odległości pomiędzy węzłami siatki", "valid": true},
                {"text": "Zależy od podwojonej odległości między węzłami siatki", "valid": false}
            ]
        },
        {
            "question": "26. Które ze zdań są nieprawdziwe",
            "tip": "",
            "answer": [
                {"text": "Obliczenia stałopozycyjne podlegają takim samym błędom jak zmiennopozycyjne", "valid": true},
                {"text": "Liczby z zakresu stałopozycyjnych zawsze są zbiorami skończonymi i przeliczalnymi", "valid": false},
                {"text": "W każdym przypadku obliczeń numerycznych mamy do czynienia ze skończonymi zbiorami wartości", "valid": false},
                {"text": "Liczba binarna (o określonej liczbie bitów) nie umożliwia zapisu dowolnej wartości numerycznej", "valid": false}
            ]
        },
        {
            "question": "27. Czy algorytm numerycznie stabilny jest również algorytmem numerycznie poprawnym",
            "tip": "Konspekt 1, Slajd 9",
            "answer": [
                {"text": "Prawda", "valid": false},
                {"text": "Fałsz", "valid": true}
            ]
        },
        {
            "question": "28. Liczby całkowite mogą być przetwarzane w systemie stałopozycyjnym",
            "tip": "",
            "answer": [
                {"text": "Prawda", "valid": true},
                {"text": "Fałsz", "valid": false}
            ]
        },
        {
            "question": "29. Dokończ zdanie... W arytmetyce zmiennopozycyjnej dla skończonej reprezentacji słowa maszynowego, zero jest określane przez",
            "tip": "Konspekt 3, Slajd 6, 8",
            "answer": [
                {"text": "Iloczyn niezerowej wartości mantysy i zerowej wartości cechy", "valid": false},
                {"text": "Żadne z wymienionych", "valid": false},
                {"text": "Iloczyn zerowej wartości mantysy i niezerowej cechy", "valid": false},
                {"text": "Iloczyn zerowej wartości mantysy i zerowej cechy", "valid": false},
                {"text": "Iloczyn niezerowej wartości mantysy i bardzo małej wartości cechy", "valid": true}
            ]
        },
        {
            "question": "30. Zagadnienie Dirichleta dotyczy równań",
            "tip": "",
            "answer": [
                {"text": "Parabolicznych", "valid": false},
                {"text": "Eliptycznych", "valid": true},
                {"text": "Różniczkowych", "valid": true},
                {"text": "Hiperbolicznych", "valid": false}

            ]
        },
        {
            "question": "31. W metodzie siatek kwadratowych rozwiązanie iteracyjnego równania Laplace’a sprowadza się do",
            "tip": "",
            "answer": [
                {"text": "Przyjęcia kryterium zakończenia obliczeń iteracyjnych", "valid": true},
                {"text": "Ułożenie równania iteracyjnego na podstawie równań różnicowych", "valid": true},
                {"text": "Obliczaniem średniej arytmetycznej w węzłach wewnętrznych", "valid": true},
                {"text": "Ustaleniem warunków brzegowych i początkowych we wszystkich węzłach siatki", "valid": true}
            ]
        },
        {
            "question": "32. W generatorze LCG(m,a,c), okres może być mniejszy od modułu m",
            "tip": "Konspekt 13, Slajd 11",
            "answer": [
                {"text": "Prawda", "valid": true},
                {"text": "Fałsz", "valid": false}
            ]
        },
        {
            "question": "33. Co nazywamy algorytmem źle uwarunkowanym?",
            "tip": "Konspekt 1, Slajd 8",
            "answer": [
                {"text": "Algorytmem źle uwarunkowanym nazywamy taki algorytm, w którym dowolnie zmiany wywołują małe względne zmiany wartości wyjściowych", "valid": false},
                {"text": "Algorytmem źle uwarunkowanym nazywamy taki algorytm, w którym małe zmiany wartości wejściowych, wywołują względne małe względne zmiany wartości wyjściowych", "valid": false},
                {"text": "Algorytmem źle uwarunkowanym nazywamy taki algorytm, w którym niewielkie zmiany danych wejściowych wywołują duże względne zmiany wartości wyjściowych", "valid": true},
                {"text": "Algorytmem źle uwarunkowanym nazywamy taki algorytm, w którym dowolnie zmiany danych wejściowych wywołują duże względne zmiany wartości wyjściowych", "valid": false}
            ]
        },
        {
            "question": "34. Co oznacza termin Epsilon maszynowy",
            "tip": "Konspekt 3, Slajd 15",
            "answer": [
                {"text": "Oznacza najmniejszą z możliwych największych wartości zmiennopozycyjnych której dodanie do wartości dla której została wyznaczona nie zmieni jej wartości w relacjach logicznych", "valid": false},
                {"text": "Oznacza najmniejszą z możliwych najmniejszych wartości zmiennopozycyjnych której dodanie do wartości dla której została wyznaczona nie zmieni jej wartości w relacjach logicznych", "valid": false},
                {"text": "Oznacza największą z możliwych największych wartości zmiennopozycyjnych której dodanie do wartości dla której została wyznaczona nie zmieni jej wartości w relacjach logicznych", "valid": false},
                {"text": "Oznacza największą możliwych najmniejszych wartości zmiennopozycyjnych której dodanie do wartości dla której została wyznaczona nie zmieni jej wartości w relacjach logicznych", "valid": true}
            ]
        },
        {
            "question": "35. Czy podczas obliczeń zmiennopozycyjnych możemy wykorzystywać kryterium zerowego rozwiązania?",
            "tip": "",
            "answer": [
                {"text": "Prawda", "valid": false},
                {"text": "Fałsz", "valid": true}
            ]
        },
        {
            "question": "36. Kiedy można uznać że numerycznie otrzymane rozwiązanie jest prawdopodobne",
            "tip": "Konspekt 1, Slajd 4",
            "answer": [
                {"text": "Wtedy gdy dane rozwiązanie może być zweryfikowane przez 1 poprawny algorytm", "valid": false},
                {"text": "Wtedy gdy możemy się odnieść do dokładnego rozwiązania analitycznego", "valid": false},
                {"text": "Wtedy gdy otrzymane rozwiązanie może być otrzymane przez co najmniej 2 niezależne algorytmy", "valid": true},
                {"text": "Wtedy gdy otrzymane rozwiązanie może być otrzymane przez co najmniej 3 niezależne algorytmy", "valid": false}
            ]
        },
        {
            "question": "37. Iteracyjne metody rozwiązywania układów liniowych to",
            "tip": "Konspekt 6, Slajd 9",
            "answer": [
                {"text": "Metoda Gaussa Jordana", "valid": false},
                {"text": "Metoda Crouta", "valid": false},
                {"text": "Metoda Jacobiego", "valid": true},
                {"text": "Metoda Gaussa Seidla", "valid": true}
            ]
        },
        {
            "question": "38. W wyniku konwersji z układu dziesiętnego liczby otrzymano liczbę 21212001212.210012 Na jaki układ mogła zostać wykonana konwersja",
            "tip": "Największa cyfra liczby < Odpowiedź",
            "answer": [
                {"text": "O podstawie 2", "valid": false},
                {"text": "O podstawie 3", "valid": true},
                {"text": "O podstawie 4", "valid": true},
                {"text": "O podstawie 5", "valid": true},
                {"text": "O podstawie 6", "valid": true},
                {"text": "O podstawie 7", "valid": true},
                {"text": "O podstawie 8", "valid": true},
                {"text": "O podstawie 9", "valid": true},
                {"text": "Żaden z nich", "valid": false}
            ]
        },
        {
            "question": "39. Który indeks tablicy V[m, n] odpowiada za kierunek równoległy do osi „y”",
            "tip": "",
            "answer": [
                {"text": "M", "valid": true},
                {"text": "N", "valid": false},
                {"text": "Y", "valid": false},
                {"text": "Żaden", "valid": false}
            ]
        },
        {
            "question": "40. W którym roku opracowano normę IEEE-754",
            "tip": "Konspekt 3, Slajd 6",
            "answer": [
                {"text": "1965", "valid": false},
                {"text": "1985", "valid": true},
                {"text": "1995", "valid": false},
                {"text": "1975", "valid": false}
            ]
        },
        {
            "question": "41. Metody Gaussa i Jacobiego jako metody bezpośrednie rozwiązywania liniowych układów równań są często wykorzystywane w metodach symulacyjnych",
            "tip": "",
            "answer": [
                {"text": "Prawda", "valid": false},
                {"text": "Fałsz", "valid": true}
            ]
        },
        {
            "question": "42. Czy błąd dyskretyzacji jest zaliczany do błędów zaokrągleń czy odcięcia",
            "tip": "Konspekt 1, Slajd 5",
            "answer": [
                {"text": "Błąd dyskretyzacji zaliczamy do błędów odcięcia. Stanowi od źródło błędów danych wejściowych algorytmu", "valid": true},
                {"text": "Błąd dyskretyzacji zaliczamy do błędów zaokrągleń. Stanowi od źródło błędów danych wejściowych algorytmu", "valid": false},
                {"text": "Błąd dyskretyzacji zaliczamy do obu wymienionych błędów. Stanowi od źródło błędów danych wejściowych algorytmu", "valid": false},
                {"text": "Błąd dyskretyzacji nie jest zaliczany do żadnego z wymienionych typów błędów", "valid": false}
            ]
        },
        {
            "question": "43. Co w komputerach oznacza Symbol ALU",
            "tip": "Konspekt 1, Slajd 7",
            "answer": [
                {"text": "Jednostka arytmetyczno-logiczna służąca do przechowywania obliczanych wartości", "valid": false},
                {"text": "Jednostka arytmetyczno-logiczna w układach wspomagających wykonywanie obliczeń", "valid": true},
                {"text": "Określenie biblioteki procedur numerycznych niezależnych od systemu operacyjnego", "valid": false},
                {"text": "Zestaw elementów konstrukcyjnych aluminiowy odprowadzający ciepło z procesora", "valid": false}
            ]
        },
        {
            "question": "44. O klasie kwadratury Netwona-Cotesa, mówimy wtedy gdy",
            "tip": "",
            "answer": [
                {"text": "Węzły kwadratury są równoodległe", "valid": true},
                {"text": "Węzły kwadratury są wyznaczane przez pochodną funkcji", "valid": false},
                {"text": "Węzły kwadratury są wyznaczane na podstawie drugiej pochodnej", "valid": false},
                {"text": "Węzły kwadratury są elementami ciągu geometrycznego", "valid": false}
            ]
        },
        {
            "question": "45. Algorytm sumowania z uśrednieniem sum cząstkowych ma zastosowanie w przypadku",
            "tip": "Konspekt 4, Slajd 10",
            "answer": [
                {"text": "Szeregów wolno zbieżnych naprzemiennych", "valid": true},
                {"text": "Szeregów wolno zbieżnych monotonicznych", "valid": false},
                {"text": "Szeregów wolno zbieżnych geometrycznych dodatnio określonych", "valid": false},
                {"text": "Szeregów wolno zbieżnych arytmetycznych ujemnie określonych", "valid": false}
            ]
        },
        {
            "question": "46. Który przykład zaliczamy do poprawnego algorytmu obliczającego różnicę kwadratów dwóch zmiennych x i y",
            "tip": "Konspekt 1, Slajd 17, 18, 19",
            "answer": [
                {"text": "X*x-y*y", "valid": false},
                {"text": "(x-y)(x+y)", "valid": true},
                {"text": "X(x-y*y/x)", "valid": false},
                {"text": "Y(y-x*x/y)", "valid": false}
            ]
        },
        {
            "question": "47. W przypadku sprzętowej realizacji działań arytmetycznych (koprocesor) dokładność operatorów jest zależna od dokładności reprezentacji zmiennych typu rzeczywistego i przyjmuje największą możliwą precyzję",
            "tip": "",
            "answer": [
                {"text": "Prawda", "valid": false},
                {"text": "Fałsz", "valid": true}
            ]
        },
        {
            "question": "48. W wyniku konwersji z układu 10 otrzymano liczbę 13578,6596875610 Na jaki układ wykonano konwersję",
            "tip": "Największa cyfra liczby < Odpowiedź",
            "answer": [
                {"text": "O podstawie 2", "valid": false},
                {"text": "O podstawie 3", "valid": false},
                {"text": "O podstawie 4", "valid": false},
                {"text": "O podstawie 5", "valid": false},
                {"text": "O podstawie 6", "valid": false},
                {"text": "O podstawie 7", "valid": false},
                {"text": "O podstawie 8", "valid": false},
                {"text": "O podstawie 9", "valid": false},
                {"text": "Żadna z wymienionych", "valid": true}
            ]
        },
        {
            "question": "49. Czy wykres funkcji błędu metody w funkcji nakładu obliczeń zmiennopozycyjnych a charakter funkcji",
            "tip": "",
            "answer": [
                {"text": "Paraboliczny", "valid": true},
                {"text": "Hiperboliczny", "valid": false},
                {"text": "Stały", "valid": false},
                {"text": "Okresowy", "valid": false}
            ]
        },
        {
            "question": "50. Czy epsilon maszynowy dla operatora dodawania jest wartością niezależną od typu zmiennych dla których jest wyznaczany",
            "tip": "Konspekt 3, Slajd 24, 25, 26, 27",
            "answer": [
                {"text": "Prawda", "valid": true},
                {"text": "Fałsz", "valid": false}
            ]
        },
        {
            "question": "51. Algebraizacja równań różniczkowych polega na zastępowaniu pochodnych ilorazami",
            "tip": "",
            "answer": [
                {"text": "2 punktowymi", "valid": false},
                {"text": "4 punktowymi", "valid": false},
                {"text": "5 punktowymi", "valid": true},
                {"text": "3 punktowymi", "valid": true}
            ]
        },
        {
            "question": "52. Do błędów metody w metodzie siatek zaliczamy",
            "tip": "",
            "answer": [
                {"text": "Błąd dyskretyzacji", "valid": true},
                {"text": "Błąd zaokrągleń", "valid": true},
                {"text": "Błąd odcięcia", "valid": true},
                {"text": "Błąd skali", "valid": false}
            ]
        },
        {
            "question": "53. Czy oszacowanie błędu to to samo co poprawka",
            "tip": "Konspekt 1, Slajd 7",
            "answer": [
                {"text": "Prawda", "valid": false},
                {"text": "Fałsz", "valid": true}
            ]
        },
        {
            "question": "54. Dla 64 bitowego słowa maszynowego przyjęto mantysę o szerokości 58 bitów. Ile wynosi bias",
            "tip": "Konspekt 3, Slajd 6",
            "answer": [
                {"text": "15", "valid": true},
                {"text": "28", "valid": false},
                {"text": "30", "valid": false},
                {"text": "05", "valid": false},
                {"text": "32", "valid": false},
                {"text": "16", "valid": false},
                {"text": "14", "valid": false},
                {"text": "Żaden", "valid": false}
            ]
        },
        {
            "question": "55. Podstawy jakiej teorii są wykorzystywane podczas analizy poprawności algorytmów",
            "tip": "Konspekt 1, Slajd 18, 19",
            "answer": [
                {"text": "Stochastyki", "valid": false},
                {"text": "Zaburzeń", "valid": true},
                {"text": "Algorytmów", "valid": false},
                {"text": "Statystyki", "valid": false}
            ]
        },
        {
            "question": "56. Pochodna p-tego rzędu funkcji można przybliżać z dowolną dokładnością poprzez iloraz różnicowy utworzony na podstawie operatorów poprzedniego lub wstecznego. Nie można stosować operatora centralnego",
            "tip": "Konspekt 11, Slajd 2",
            "answer": [
                {"text": "Prawda", "valid": false},
                {"text": "Fałsz", "valid": true}
            ]
        },
        {
            "question": "57. Algorytmem deterministycznym nazywamy algorytm, w którym zmiana stanu maszyny nie jest jednoznacznie określona dla dowolnych danych wejściowych",
            "tip": "Konspekt 1, Slajd 4",
            "answer": [
                {"text": "Prawda", "valid": false},
                {"text": "Fałsz", "valid": true}
            ]
        },
        {
            "question": "58. Wartość słowa maszynowego 1111111111 00(...) zaznacz tylko prawidłowe określenia zgodne z normą IEEE-754",
            "tip": "Konspekt 3, Slajd 8",
            "answer": [
                {"text": "Artihimetic overflow (Dodatni nadmiar)", "valid": false},
                {"text": "Arthimetic underflow", "valid": false},
                {"text": "Not a number", "valid": false},
                {"text": "Żaden z nich", "valid": false},
                {"text": "Arthimetc overflow (Ujemny nadmiar)", "valid": true}
            ]
        },
        {
            "question": "59. Metody odwracania dystrybuanty nie może być wykorzystywana w liniowych generatorach liczb pseudolosowych",
            "tip": "Konspekt 13, Slajd 19",
            "answer": [
                {"text": "Prawda", "valid": false},
                {"text": "Fałsz", "valid": true}
            ]
        },
        {
            "question": "60. Ciągiem liczb pseudolosowych nazwiemy każdy ciąg w którym nigdy nie wystąpi powtórzenie tej samej sekwencji liczb",
            "tip": "Konspekt 13, Slajd 3",
            "answer": [
                {"text": "Prawda", "valid": false},
                {"text": "Fałsz", "valid": true}
            ]
        },
        {
            "question": "61. Czy warunki brzegowe pierwszego rodzaju w metodach siatkowych dotyczą",
            "tip": "",
            "answer": [
                {"text": "Wartości zadanych tylko na konturach obszarów i nie ulegających zmianie podczas rozwiązywania układów równań (obliczeń)", "valid": false},
                {"text": "Wartości początkowych, ulegających zmianie podczas rozwiązywania układów równań (obliczeń)", "valid": false},
                {"text": "Rozwiązanie układu równań różniczkowych nie nie jest zależne od zadanych warunków brzegowych", "valid": false},
                {"text": "Wartości zadanych, nie ulegających zmianie podczas rozwiązywania układu równań (obliczeń)", "valid": true}
            ]
        },
        {
            "question": "62. Schemat krzyża centralnego w metodzie siatek jest wykorzystywany w przypadku",
            "tip": "",
            "answer": [
                {"text": "Czwartej pochodnej", "valid": false},
                {"text": "Pierwszej pochodnej", "valid": true},
                {"text": "Drugiej pochodnej", "valid": false},
                {"text": "Nie ma takiego schematu w metodzie", "valid": false}
            ]
        },
        {
            "question": "63. Który lub które przykłady poniższych algorytmów są prawdziwe?",
            "tip": "",
            "answer": [
                {"text": "Dla liczb rzeczywistych 4-bajtowych iloczyn dwóch liczb wymagałby zastosowania co najmniej reprezentacji 4-bajtowe", "valid": true},
                {"text": "Dla liczb rzeczywistych każdy iloczyn dwóch liczb wymaga zastosowania takiej samej reprezentacji bajtowej jak dla liczb tego iloczynu", "valid": false},
                {"text": "Dla liczb rzeczywistych 4-bajtowych iloczyn dwóch liczb wymagałby zastosowania co  najmniej reprezentacji 16-bajtowej", "valid": false},
                {"text": "dla liczb rzeczywistych 4-bajtowych iloczyn dwóch liczb wymagałby zastosowania reprezentacji 8-bajtowej.", "valid": false}
            ]
        },
        {
            "question": "64. W wyniku konwersji 5-cyfrowej liczby binarnej 10010 na układ  pozycyjny o podstawie 10 otrzymano liczbę",
            "tip": "Konspekt 2, Slajd 21",
            "answer": [
                {"text": "Żadna z wymienionych wartości", "valid": false},
                {"text": "80010", "valid": false},
                {"text": "00081", "valid": false},
                {"text": "01800", "valid": false},
                {"text": "00018", "valid": true},
                {"text": "10080", "valid": false},
                {"text": "08100", "valid": false}
            ]
        },
        {
            "question": "65. Liniowe generatory kongruencyjne są źródłem",
            "tip": "Konspekt 13, Slajd 10, 11, 12",
            "answer": [
                {"text": "liczb losowych przy pewnych założeniach", "valid": false},
                {"text": "liczb powtrazających się w pewnym cyklu", "valid": true},
                {"text": "liczb pseudolosowych", "valid": true},
                {"text": "zbioru skończonego obliczanych wartości", "valid": false}
            ]
        },
        {
            "question": "66. Wybierz prawidłowe dokończenie wniosku: Jako wskaźnik uwarunkowania można przyjmować maksymalny mnożnik, z jakim zaburzenie względne danych przeniesie się na zaburzenie względne wyniku. Im też wskaźnik:",
            "tip": "Konspekt 1, Slajd 10",
            "answer": [
                {"text": "bliższy jest wartości 0, tym zadanie „lepiej jest uwarunkowane”", "valid": false},
                {"text": "bliższy jest wartości epsilona maszynowego, tym „lepiej jest uwarunkowane”", "valid": false},
                {"text": "bliższy jest wartości jeden, tym zadanie „lepiej jest uwarunkowane”", "valid": true},
                {"text": "żadne z wymienionych określeń", "valid": false}
            ]
        },
        {
            "question": "67. Zaznacz wszystkie prawidłowe określenia:",
            "tip": "",
            "answer": [
                {"text": "Ze względu na reprezentacje binarną typów wartości stało i zmiennopozycyjnych, obliczenia zmienno-pozycyjne podlegają całkowicie innym rodzajom błędów w obliczeniach numerycznych.", "valid": true},
                {"text": "Liczby zmiennopozycyjne to zbiory wartości, które mogą być wyrażane w sposób skończony i przeliczalny poprzez skończoną liczbę binarną", "valid": false},
                {"text": "Liczby zmiennopozycyjne to zbiory wartości, które nie mogą być wyrażane w sposób skończony i przeliczalny poprzez skończoną liczbę binarną", "valid": true},
                {"text": "Liczby z zakresu stałopozycyjnych zawsze są zbiorami skończonymi i przeliczalnymi", "valid": true}
            ]
        },
        {
            "question": "68. Podczas konwersji liczb rzeczywistych z jednego układu pozycyjnego na inny, ilość cyfr ułamkowych...",
            "tip": "Konspekt 2, Slajd 24",
            "answer": [
                {"text": "Istotnie wpływa na dokładność konwersji", "valid": true},
                {"text": "Nie jest istotna i nie wpływa na dokładność konwersji ", "valid": false},
                {"text": "Jest istotna tylko podczas konwersji z układu o podstawie 10 na inny", "valid": false},
                {"text": "Jest istotna tylko dla układu pozycyjnego o podstawie 10", "valid": false}
            ]
        },
        {
            "question": "69. Bezpośrednie metody rozwiązywania układów równań liniowych to:",
            "tip": "Konspekt 6, Slajd 9",
            "answer": [
                {"text": "Metoda Gaussa", "valid": true},
                {"text": "Metoda Gaussa-Jordana", "valid": true},
                {"text": "Metoda Crouta ", "valid": true},
                {"text": "Metoda Jacobiego", "valid": false}
            ]
        },
        {
            "question": "70. Aby generator LCG mógł generować liczby pseudolosowe należy przed uruchomieniem ustawić niezerową wartość seed ziarna:",
            "tip": "Konspekt 13, Slajd 15",
            "answer": [
                {"text": "Prawda", "valid": false},
                {"text": "Fałsz", "valid": true}
            ]
        },
    ]
}
