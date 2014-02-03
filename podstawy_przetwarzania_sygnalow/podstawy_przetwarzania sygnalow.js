var test = {
    "time": 30,
    "testQuestionCount": 30,
    "multiAnswer": true,
    "questionList": [
        {
            "question": "Który z poniższych wzorów jest wzorem na obliczanie wartości średniej procesu z rozkładu prawdopodobieństwa: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Csum_%7Bi%3D1%7D%5EI%20x_i%20f%28x_i%2Ct%29%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Cint_%7B-%20%5Cinfty%7D%5E%7B%5Cinfty%7D%20f%28x%2Ct%29%20dx%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Cint_%7B-%20%5Cinfty%7D%5E%7B%5Cinfty%7D%20x%20f%28x%2Ct%29%20dx%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Csum_%7Bi%3D1%7D%5EI%20f%28x_i%2Ct%29%20\"> ", "valid": false},
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20S%28f_1%2Cf_2%29%20%3D%20FT%5C%7B%20R%20%28%20t_1%2C%20t_2%20%29%20%5C%7D%20\"> definiuje:  ",
            "tip": "",
            "answer": [
                {"text": "funkcję autokowariancji procesu niestacjonarnego", "valid": false},
                {"text": "widmową gęstość mocy procesu niestacjonarnego", "valid": true},
                {"text": "funkcję autokorelacji procesu niestacjonarnego", "valid": false},
                {"text": "dystrybuantę 2-go rzędu procesu niestacjonarnego", "valid": false},
            ]
        },
        {
            "question": "Metoda Burg'a estymacji widmowej gęstości mocy jest metodą ",
            "tip": "",
            "answer": [
                {"text": "parametryczną", "valid": true},
                {"text": "efektywną", "valid": false},
                {"text": "nieparametryczną", "valid": false},
                {"text": "podprzestrzeni", "valid": false},
            ]
        },
        {
            "question": "Dla układu dyskretnego niezmiennego w czasie (<img src=\"http://latex.codecogs.com/png.latex?%20x%20%28%20n%20%29%20\"> - sygnał wejściowy, <img src=\"http://latex.codecogs.com/png.latex?%20h%20%28%20n%20%29%20\"> - odpowiedź impulsowa układu, <img src=\"http://latex.codecogs.com/png.latex?%20y%20%28%20n%20%29%20\"> - sygnał wyjściowy)  ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20y%20%28n%20%29%3D%5Csum_%7Bk%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20h%20%28%20k%20%29%20x%20%28n-k%20%29%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20y%20%28%20n%20%29%20%3D%5Csum_%7Bk%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20x%20%28%20k%20%29%20h%20%28%20n-k%20%29%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20y%20%28n%20%29%3Dx%20%28n%20%29%5Cstar%20h%20%28n%20%29\"> (splot) ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20y%20%28%20n%20%29%20%3D%20h%20%28%20n%20%29%20%5Cstar%20%20x%20%28%20n%20%29%20\"> (splot) ", "valid": true},
            ]
        },
        {
            "question": "Które z poniższych warunków spełnia poziom ufności <img src=\"http://latex.codecogs.com/png.latex?%20%20%5Calpha%20\"> estymatora  ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20-%5Cinfty%20%5Cleq%20%5Calpha%20%5Cleq%20%5Cinfty%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Calpha%20%5Cgeq%201%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%200%20%5Cleq%20%5Calpha%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%200%20%5Cgeq%20%5Calpha%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%200%20%5Cleq%20%5Calpha%20%5Cleq%201%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Calpha%20%5Cleq%201%20\"> ", "valid": false},
            ]
        },
        {
            "question": "Wartościowość modulacji jest to ",
            "tip": "",
            "answer": [
                {"text": "liczba opisująca efektywność modulacji", "valid": false},
                {"text": "liczba bitów zajmowanych przez pojedynczy symbol", "valid": false},
                {"text": "liczba wartości jaka może przyjąć każdy z symboli", "valid": true},
                {"text": "liczba nośnych użytych w modulacji", "valid": false},
            ]
        },
        {
            "question": "Bieguny posiadają ",
            "tip": "",
            "answer": [
                {"text": "filtry Czebyshev'a", "valid": true},
                {"text": "filtry typu FIR", "valid": false},
                {"text": "filtry eliptyczne", "valid": true},
                {"text": "filtry Butterworth'a", "valid": true},
                {"text": "filtry Ramez'a", "valid": false},
                {"text": "filtry decymacyjne", "valid": false},
            ]
        },
        {
            "question": "Estymator ",
            "tip": "",
            "answer": [
                {"text": "jest wielkością losową", "valid": true},
                {"text": "posiada rozkład prawdopodobieństwa", "valid": true},
                {"text": "jest statystycznie niezależny", "valid": false},
                {"text": "jest wielkością deterministyczną", "valid": false},
                {"text": "jest nieskorelowany", "valid": false},
            ]
        },
        {
            "question": "Okno w metodzie okna projektowania filtrów cyfrowych stosowane jest w celu ",
            "tip": "",
            "answer": [
                {"text": "zmniejszenia tłumienia w paśmie przepustowym", "valid": false},
                {"text": "likwidacji przecieku widma", "valid": false},
                {"text": "zmniejszenia szerokości pasma przejściowego", "valid": false},
                {"text": "zwiększenia tłumienia w paśmie zaporowym", "valid": true},
            ]
        },
        {
            "question": "Zależność pomiędzy autokorelacją na wyjściu i na wyjściu systemu liniowego niezmiennego w czasie ma postać: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R_%7Byx%7D%28%5Ctau%29%20%3D%20R_%7Bxx%7D%28%5Ctau%29%20%5Chspace%7B2pt%7D%20h%28%5Ctau%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R_%7Byy%7D%28%5Ctau%29%20%3D%20R_%7Bxx%7D%28%5Ctau%29%20%5Chspace%7B2pt%7D%20h%28%5Ctau%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R_%7Byy%7D%28%5Ctau%29%20%3D%20R_%7Bxx%7D%28%5Ctau%29%20%5Chspace%7B2pt%7D%2A%5Chspace%7B2pt%7D%20h%28%5Ctau%29%2A%5Chspace%7B2pt%7D%20h%28-%5Ctau%29%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R_%7Byx%7D%28%5Ctau%29%20%3D%20R_%7Bxx%7D%28%5Ctau%29%20%5Chspace%7B2pt%7D%2A%5Chspace%7B2pt%7D%20h%28%5Ctau%29%2A%5Chspace%7B2pt%7D%20h%28-%5Ctau%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R_%7Bxy%7D%28%5Ctau%29%20%3D%20R_%7Bxx%7D%28%5Ctau%29%20%5Chspace%7B2pt%7D%20h%28%5Ctau%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R_%7Bxy%7D%28%5Ctau%29%20%3D%20R_%7Bxx%7D%28%5Ctau%29%20%5Chspace%7B2pt%7D%2A%5Chspace%7B2pt%7D%20h%28%5Ctau%29%20\"> ", "valid": false},
            ]
        },
        {
            "question": "Do przeprowadzenia estymacji statystyki lub parametru procesu konieczne jest co najmniej ",
            "tip": "",
            "answer": [
                {"text": "przekrój procesu po czasie", "valid": false},
                {"text": "N próbek jednej z realizacji", "valid": true},
                {"text": "przekrój procesu po zbiorze", "valid": false},
                {"text": "próbki jednej z realizacji", "valid": false},
                {"text": "N próbek kilku realizacji", "valid": false},
            ]
        },
        {
            "question": "Twierdzenie ergodyczne dla wartości średniej procesu z czasem ciągłym ma postać: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20m%20%3D%20E%20%5C%7Bx%28t%29%20%5C%7D%20%3D%20%5Clim_%7BT%20%5Cto%20%5Cinfty%7D%20%20%5Cint_%7B-T%7D%5ET%20x%28t%29%20dt%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20m%20%3D%20E%20%5C%7Bx%28t%29%20%5C%7D%20%3D%20%20%5Cint_%7B-%5Cinfty%7D%5E%7B%5Cinfty%7D%20x%28t%29%20dt%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20m%20%3D%20E%20%5C%7Bx%28t%29%20%5C%7D%20%3D%20%5Clim_%7BT%20%5Cto%20%5Cinfty%7D%20%7B1%20%5Cover%20%7B2T%7D%7D%20%5Cint_%7B-T%7D%5ET%20x%28t%29%20dt%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20m%20%3D%20E%20%5C%7Bx%28t%29%20%5C%7D%20%3D%20%5Clim_%7BT%20%5Cto%20%5Cinfty%7D%20%7B1%20%5Cover%20T%7D%20%5Cint_%7B-T%7D%5ET%20x%28t%29%20dt%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20m%20%3D%20E%20%5C%7Bx%28t%29%20%5C%7D%20%3D%20%7B1%20%5Cover%20T%7D%20%5Cint_%7B-T%7D%5ET%20x%28t%29%20dt%20\"> ", "valid": false},
            ]
        },
        {
            "question": "Relacje między wyjściem a wejściem systemu liniowego inercyjnego niezmiennego w czasie dla czasu ciągłego opisuje zależność ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20y%28t%29%20%3D%20%5Cint_%7B-%5Cinfty%7D%5E%7B%5Cinfty%7D%20h%28%5Ctau%29%20x%28t-%5Ctau%29%20d%5Ctau%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20y%28t%29%20%3D%20%5Cint_%7B-%5Cinfty%7D%5E%7B%5Cinfty%7D%20h%28%5Ctau%29%20x%28%5Ctau-t%29%20d%5Ctau%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20y%28t%29%20%3D%20%5Cint_%7B-%5Cinfty%7D%5E%7B%5Cinfty%7D%20h%28%5Ctau%29%20x%28t-%5Ctau%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20y%28t%29%20%3D%20%5Clim_%7BT%20%5Cto%20%5Cinfty%7D%20%5Cint_%7B-T%7D%5E%7BT%7D%20h%28%5Ctau%29%20x%28t-%5Ctau%29%20d%5Ctau%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20y%28t%29%20%3D%20%5Cint_%7B-%5Cinfty%7D%5E%7B%5Cinfty%7D%20h%28%5Ctau%29%20x%28%5Ctau%29%20d%5Ctau%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20y%28t%29%20%3D%20%5Cint_%7B-%5Cinfty%7D%5E%7B%5Cinfty%7D%20h%28t%29%20x%28t-%5Ctau%29%20dt%20\"> ", "valid": false},
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20F%20%28x%2Ct%29%20%3D%20P%20%5C%7B%20x%28t%29%20%5Cleq%20x%20%5C%7D%20\"> definiuje:  ",
            "tip": "",
            "answer": [
                {"text": "histogram", "valid": false},
                {"text": "gęstość prawdopodobieństwa 1-go rzędu", "valid": false},
                {"text": "dystrubuantę 1-go rzędu", "valid": true},
                {"text": "prawdopodobieństwo wystąpienia wartości <img src=\"http://latex.codecogs.com/png.latex?%20x\"> sygnału ", "valid": false},
            ]
        },
        {
            "question": "Interpolacja to proces ",
            "tip": "",
            "answer": [
                {"text": "zmniejszania wartości próbek", "valid": false},
                {"text": "zmniejszania częstotliwości próbkowania", "valid": false},
                {"text": "zwiększania wartości próbek", "valid": false},
                {"text": "zwiększania częstotliwości próbkowania", "valid": true},
            ]
        },
        {
            "question": "W wyniku <img src=\"http://latex.codecogs.com/png.latex?%20N\">-punktowej DFT powstaje ciąg <img src=\"http://latex.codecogs.com/png.latex?%20N\">-elementowy. W ciągu tym liczba niezależnych wyrazów wynosi  ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20N-1\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20N%2F2\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%202N\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20N\"> ", "valid": false},
            ]
        },
        {
            "question": "Przekrój procesu stochastycznego po czasie jest: ",
            "tip": "",
            "answer": [
                {"text": "dystrybuantą", "valid": false},
                {"text": "zmienną losową", "valid": true},
                {"text": "realizacją", "valid": false},
                {"text": "rozkładem prawdopodobieństwa", "valid": false},
            ]
        },
        {
            "question": "Zależność pomiędzy widmowymi gęstościami mocy na wyjściu i na wyjściu systemu liniowego niezmiennego w czasie ma postać: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20S_%7Byy%7D%28f%29%20%3D%20S_%7Bxx%7D%28f%29%20H%28f%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20S_%7Byy%7D%28f%29%20%3D%20S_%7Bxx%7D%28f%29%20%7CH%28f%29%7C%5E2%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20S_%7Bxy%7D%28f%29%20%3D%20S_%7Bxx%7D%28f%29%20H%28f%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20S_%7Byy%7D%28f%29%20%3D%20S_%7Bxx%7D%28f%29%20%7CH%28f%29%7C%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20S_%7Byx%7D%28f%29%20%3D%20S_%7Bxx%7D%28f%29%20H%28f%29%20\"> ", "valid": false},
            ]
        },
        {
            "question": "W definicji <img src=\"http://latex.codecogs.com/png.latex?%20%20S%28f_1%2C%20f_2%29%20%3D%20%5Cmathcal%20FT%20%5Crm%20%5C%7BR%28t_1%2Ct_2%29%20%5C%7D%20\">symbol <img src=\"http://latex.codecogs.com/png.latex?%20%20%5Cmathcal%20FT%20\"> oznacza:  ",
            "tip": "",
            "answer": [
                {"text": "dystrybuantę 1-go rzędu", "valid": false},
                {"text": "transformację falkową", "valid": false},
                {"text": "dystrybuantę 2-go rzędu", "valid": false},
                {"text": "dwuwymiarową transformację Fouriera", "valid": true},
            ]
        },
        {
            "question": "Filtry cyfrowe eliptyczne charakteryzują się ",
            "tip": "",
            "answer": [
                {"text": "zafalowaniami w pasmach przepustowym i zaporowym", "valid": true},
                {"text": "maksymalnie płaskim modułem funkcji transmitancji", "valid": false},
                {"text": "zafalowaniami tylko w paśmie przepustowym", "valid": false},
                {"text": "zafalowaniami tylko w paśmie zaporowym", "valid": false},
            ]
        },
        {
            "question": "Równanie różnicowe ma postać ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Csum_%7Bk%3D1%7D%5EN%20a_k%20y%28t%2Bk%29%20%3D%20%5Csum_%7Bk%3D1%7D%5EM%20b_k%20x%28t%2Bk%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Csum_%7Bk%3D1%7D%5EN%20a_k%20y%28t-k%29%20%3D%20%5Csum_%7Bk%3D1%7D%5EM%20b_k%20x%28t-k%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Csum_%7Bk%3D0%7D%5E%7B%5Cinfty%7D%20a_k%20y%28t-k%29%20%3D%20%5Csum_%7Bk%3D0%7D%5E%7B%5Cinfty%7D%20b_k%20x%28t-k%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Csum_%7Bk%3D1%7D%5E%7B%5Cinfty%7D%20a_k%20y%28t%2Bk%29%20%3D%20%5Csum_%7Bk%3D1%7D%5E%7B%5Cinfty%7D%20b_k%20x%28t%2Bk%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Csum_%7Bk%3D0%7D%5EN%20a_k%20y%28t-k%29%20%3D%20%5Csum_%7Bk%3D0%7D%5EM%20b_k%20x%28t-k%29%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Csum_%7Bk%3D0%7D%5E%7B%5Cinfty%7D%20a_k%20y%28t%2Bk%29%20%3D%20%5Csum_%7Bk%3D0%7D%5E%7B%5Cinfty%7D%20b_k%20x%28t%2Bk%29%20\"> ", "valid": false},
            ]
        },
        {
            "question": "Wybierz poprawną definicję autokorelacji procesu niestacjonarnego: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R%28%5Ctau%29%20%3D%20E%20%5C%7Bx%28t%29%20x%28t%2B%5Ctau%29%20%5C%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R%28%5Ctau%29%20%3D%20E%20%5C%7B%5Bx%28t%29-m%5D%5B%20x%28t%2B%5Ctau%29-m%5D%20%5C%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R%28t_1%2Ct_2%29%20%3D%20E%20%5C%7B%5Bx%28t_1%29-m%28t_1%29%5D%5B%20x%28t_2%29-m%28t_2%29%5D%20%5C%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R%28t_1%2Ct_2%29%20%3D%20E%20%5C%7Bx%28t_1%29%20x%28t_2%29%20%5C%7D%20\"> ", "valid": true},
            ]
        },
        {
            "question": "Które z poniższych właściwości są prawdziwe dla funkcji korelacji wzajemnej procesów stacjonarnych: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R_%7Byx%7D%28-%5Ctau%29%20%3D%20R_%7Bxy%7D%28%5Ctau%29%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R_%7Bxy%7D%28-%5Ctau%29%20%3D%20R_%7Bxy%7D%28%5Ctau%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R_%7Byx%7D%28-%5Ctau%29%20%3D%20R_%7Byx%7D%28%5Ctau%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R_%7Bxy%7D%28-%5Ctau%29%20%3D%20R_%7Byx%7D%28%5Ctau%29%20\"> ", "valid": true},
            ]
        },
        {
            "question": "Warunek odnośnie maksymalnego tłumienia filtru cyfrowego dotyczy pasma ",
            "tip": "",
            "answer": [
                {"text": "minimalnego", "valid": false},
                {"text": "przejściowego", "valid": false},
                {"text": "zaporowego", "valid": false},
                {"text": "przepustowego", "valid": true},
            ]
        },
        {
            "question": "Filtry typu FIR (o skończonej długości odpowiedzi impulsowej) ",
            "tip": "",
            "answer": [
                {"text": "posiadają liniową fazę", "valid": false},
                {"text": "nie posiadają biegunów", "valid": true},
                {"text": "mogą mieć liniową fazę", "valid": true},
                {"text": "są zawsze stabilne", "valid": true},
                {"text": "nie posiadają zer", "valid": false},
                {"text": "mogą być niestabilne", "valid": false},
            ]
        },
        {
            "question": "Aliasing to ",
            "tip": "",
            "answer": [
                {"text": "nakładanie się na siebie widma oryginalnego i widma powtarzanego w otoczeniu połowy częstotliwości próbkowania", "valid": true},
                {"text": "rozmycie prążka DFT", "valid": false},
                {"text": "to samo co przeciek widma", "valid": false},
                {"text": "przesunięcie fazy prążka DFT", "valid": false},
            ]
        },
        {
            "question": "Estymator widmowej gęstości mocy procesu można uzyskać z zależności (<img src=\"http://latex.codecogs.com/png.latex?%20%20FT%20\"> oznacza transformację Fouriera)  ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%7C%20FT%20%5C%7B%20%5Chat%20R%28k%29%20w%28k%29%20%5C%7D%20%7C%5E2%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%7C%20FT%20%5C%7B%20x%28t%29%20w%28t%29%20%5C%7D%20%7C%5E2%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%7C%20FT%20%5C%7B%20x%28t%29%20w%28t%29%20%5C%7D%20%7C%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20FT%20%5C%7B%20%5Chat%20R%28k%29%20w%28k%29%20%5C%7D%20\"> ", "valid": true},
            ]
        },
        {
            "question": "Systemu zmienne w czasie różnią się od systemów niezmiennych w czasie tym, że ",
            "tip": "",
            "answer": [
                {"text": "sygnał na jego wyjściu zmienia się niezależnie od sygnału wejściowego", "valid": false},
                {"text": "odpowiedź impulsowa jest zależna od czasu pobudzenia systemu", "valid": true},
                {"text": "odpowiedż systemu w danej chwili czasu zależy jedynie od sygnału na wejściu w tej samej chwili czasu", "valid": false},
                {"text": "funkcja transmitancji jest funkcją zarówno częstotliwości jak i czasu", "valid": true},
            ]
        },
        {
            "question": "W poleceniu MATLAB postaci [b a] = butter (N, [0.2 0.3], 'stop'), N oznacza: ",
            "tip": "",
            "answer": [
                {"text": "liczbę biegunów", "valid": false},
                {"text": "liczbę par zer", "valid": false},
                {"text": "długość odpowiedzi impulsowej w próbkach", "valid": false},
                {"text": "liczbę par biegunów", "valid": true},
                {"text": "liczbę zer", "valid": false},
                {"text": "liczbę pasm częstotliwości", "valid": false},
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20m%28t_1%2Ct_2%2C...%2Ct_n%29%20%3D%20E%20%5C%5Bx%28t_1%29x%28t_2%29...x%28t_n%29%20%5C%7D%20\"> definiuje:  ",
            "tip": "",
            "answer": [
                {"text": "kumulant n-tego rzędu dowolnego procesu ", "valid": false},
                {"text": "moment n-tego rzędu dowolnego procesu ", "valid": true},
                {"text": "autokowariancję n-tego rzędu dowolnego procesu ", "valid": false},
                {"text": "dystrybuantę n-tego rzędu dowolnego procesu ", "valid": false},
            ]
        },
        {
            "question": "Dla procesu całkowicie stacjonarnego spełniony jest warunek lub warunki: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20F%28x_1%2C...%2Cx_n%2Ct_1%2B%5Cepsilon%2C...%2Ct_n%2B%5Cepsilon%29%20%3D%20F%28x_1%2C...%2Cx_n%2Ct_1%2C...%2Ct_n%29%20\"> ", "valid": true},
                {"text": "przesunięcie punktu obserwacji nie zmienia rozkładów pradopodobienstwa procesu", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20m%28t%29%20%3D%20m%3B%20%5Cquad%20R%28t_1%2Ct_2%29%20%3D%20R%28%5Ctau%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20f%28x_1%2C...%2Cx_n%2Ct_1%2B%5Cepsilon%2C...%2Ct_n%2B%5Cepsilon%29%20%3D%20f%28x_1%2C...%2Cx_n%2Ct_1%2C...%2Ct_n%29%20\"> ", "valid": true},
            ]
        },
        {
            "question": "Dla filtrów o skończonej długości odpowiedzi impulsowej ",
            "tip": "",
            "answer": [
                {"text": "stopień wielomianu w liczniku wynosi zero", "valid": false},
                {"text": "stopień wielomianu w mianowniku wynosi zero", "valid": true},
                {"text": "stopień wielomianu w mianowniku wynosi jeden", "valid": false},
                {"text": "stopień wielomianu w liczniku wynosi jeden", "valid": false},
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20E%20%5C%7B%5Bx%28t%29%20-%20m%28t%29%5D%5E2%20%5C%7D%20\"> definiuje  ",
            "tip": "",
            "answer": [
                {"text": "rozkład prawdopodobieństwa procesu stochastycznego", "valid": false},
                {"text": "wariancję procesu stochastycznego", "valid": true},
                {"text": "wartość średnią procesu stochastycznego", "valid": false},
                {"text": "wartość średniokwadratową procesu stochastycznego", "valid": false},
                {"text": "funkcje autokowariancji procesu stochastycznego", "valid": false},
            ]
        },
        {
            "question": "Są dane cztery przebiegi sinusoidalne. Częstotliwość próbkowania jest <img src=\"http://latex.codecogs.com/png.latex?%20f_s%3D1000\"> Hz, liczba próbek <img src=\"http://latex.codecogs.com/png.latex?%20N%3D1000\">, <img src=\"http://latex.codecogs.com/png.latex?%20n%3D0%2C%201%2C%202%2C%20%5Cldots%20%2C%20N-1\">. Wskaż te przebiegi, dla których w wyniku DFT pojawi się przeciek widma  ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20x_n%3D10%5Ccdot%20%5Csin%20%282%5Ccdot%20%5Cpi%20%5Ccdot%2071.4%5Ccdot%20n%2FN%29\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20x_n%3D2%5Ccdot%20%5Csin%20%282%5Ccdot%20%5Cpi%20%5Ccdot%2061.3%5Ccdot%20n%2FN%29\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20x_n%3D7.4%5Ccdot%20%5Csin%20%282%5Ccdot%20%5Cpi%20%5Ccdot%2022%5Ccdot%20n%2FN%29\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20x_n%3D1.5%5Ccdot%20%5Csin%20%282%5Ccdot%20%5Cpi%20%5Ccdot%2030%5Ccdot%20n%2FN%29\"> ", "valid": false},
            ]
        },
        {
            "question": "Jaka jest częstotliwość <img src=\"http://latex.codecogs.com/png.latex?%20m\">-tego prążka widma obliczonego przy pomocy $N$-punktowej DFT (<img src=\"http://latex.codecogs.com/png.latex?%20f_s\"> -- częstotliwość próbkowania)  ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20N%5Ccdot%20f_s%2Fm\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20f_s%5Ccdot%20m\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20m%2FN\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20mf_s%2FN\"> ", "valid": true},
            ]
        },
        {
            "question": "Filtracja innowacyjna bierze swoją nazwę od tego, że (zaznacz wszystkie prawidłowe odpowiedzi): ",
            "tip": "",
            "answer": [
                {"text": "powstała w czasach wielu innych innowacji", "valid": false},
                {"text": "jest nowoczesna", "valid": false},
                {"text": "każda kolejna wartość sygnału błędu wnosi nowa informację", "valid": true},
                {"text": "każda kolejna wartość sygnału błędu jest nieskorelowana z poprzednimi wartościami", "valid": true},
            ]
        },
        {
            "question": "Proces jest słabo stacjonarny, jeśli spełniony jest warunek/warunki: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R%28t_1%2Ct_2%29%20%3D%20R%28%5Ctau%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20m%28t%29%20%3D%20m%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20f%28x_1%2C...%2Cx_n%2Ct_1%2B%5Cepsilon%2C...%2Ct_n%2B%5Cepsilon%29%20%3D%20f%28x_1%2C...%2Cx_n%2Ct_1%2C...%2Ct_n%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20F%28x_1%2C...%2Cx_n%2Ct_1%2B%5Cepsilon%2C...%2Ct_n%2B%5Cepsilon%29%20%3D%20F%28x_1%2C...%2Cx_n%2Ct_1%2C...%2Ct_n%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20m%28t%29%20%3D%20m%20%5Cquad%20i%20%5Cquad%20R%28t_1%2Ct_2%29%20%3D%20R%28%5Ctau%29\"> ", "valid": true},
            ]
        },
        {
            "question": "Wartość estymatora zwykle różni się od wartości dokładnej estymowanej wielkości, ponieważ ",
            "tip": "",
            "answer": [
                {"text": "estymacja realizowana jest w oparciu o jedną realizację", "valid": false},
                {"text": "nie dysponujemy wszystkimi realizacjami", "valid": false},
                {"text": "skończony zbiór próbek nie jest reprezentatywny dla całej realizacji", "valid": true},
                {"text": "operuje na próbkach a błędy próbkowania są nieuniknione", "valid": false},
            ]
        },
        {
            "question": "Estymator zgodny, to taki ",
            "tip": "",
            "answer": [
                {"text": "błąd średniokwadratowy jest na zadawalającym poziomie i osiąga wartość minimalną", "valid": false},
                {"text": "którego obciążenie jest zerowe jeśli liczba próbek jest coraz wieksza", "valid": false},
                {"text": "dla którego odległość wyników estymacji w sensie statystycznym, maleje ze wzrostem liczby próbek N", "valid": true},
                {"text": "dla którego wyniki są najlepsze z możliwych do uzyskania przy danej liczbie próbek", "valid": false},
            ]
        },
        {
            "question": "Poziom ufności opisuje ",
            "tip": "",
            "answer": [
                {"text": "ryzyko, że wynik estymacji znajdzie się w przedziale ufności", "valid": false},
                {"text": "prawdopodobieństwo, że wynik estymacji znajdzie się poza przedziałem ufności", "valid": false},
                {"text": "prawdopodobieństwo, że wynik estymacji znajdzie się w przedziale ufności", "valid": true},
                {"text": "pewność, że wynik estymacji znajdzie się w przedziale ufności", "valid": false},
                {"text": "pewność, że wynik estymacji znajdzie się poza przedziałem ufności", "valid": false},
            ]
        },
        {
            "question": "W jakiej metodzie identyfikacji systemu funkcja transmitancji wyznaczana jest z zależności <img src=\"http://latex.codecogs.com/png.latex?%20%20%5Chat%20H%28f%29%20%3D%20%7B%7B%5Chat%20S_%7Byx%7D%28f%29%7D%20%5Cover%20%7B%5Chat%20S_%7Bxx%7D%28f%29%7D%7D%20\">, gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20S%20\"> oznacza widmową gęstość mocy  ",
            "tip": "",
            "answer": [
                {"text": "impulsowej", "valid": false},
                {"text": "korelacyjnej", "valid": true},
                {"text": "widmowej", "valid": false},
                {"text": "sinusoidalnej", "valid": false},
            ]
        },
        {
            "question": "To, że odpowiedź impulsowa systemu posiada niezerowe wartości tylko dla czasu większego lub równego zeru jest warunkiem: ",
            "tip": "",
            "answer": [
                {"text": "stabilności systemu", "valid": false},
                {"text": "przyczynowości systemu", "valid": true},
                {"text": "nie wprowadzania przez system opóźnienia", "valid": false},
                {"text": "wszechprzepustowości systemu", "valid": false},
            ]
        },
        {
            "question": "Jeżeli sygnał został spróbkowany z częstotliwością <img src=\"http://latex.codecogs.com/png.latex?%20f_s\">, to jego dyskretne widmo w dziedzinie częstotliwości jest powielane na osi częstotliwości co  ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%202%5Ccdot%20f_s\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%2010%5Ccdot%20f_s\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20f_s%2F2\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20f_s\"> ", "valid": true},
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20m%28t%29%20%3D%20m%20%3D%5Cint_R%20x%20f%28x%29%20dx%20\"> jest słuszna dla procesu:  ",
            "tip": "",
            "answer": [
                {"text": "cyklostacjonarnego", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20m%20\"> stacjonarnego ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Calpha%20\"> stacjonarnego ", "valid": false},
                {"text": "stacjonarnego całkowicie", "valid": true},
                {"text": "słabo stacjonarnego", "valid": true},
                {"text": "lokalnie stacjonarnego", "valid": false},
            ]
        },
        {
            "question": "Estymator wartości średniej procesu dany jest zależnością ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Clim_%7BN%20%5Cto%20%5Cinfty%7D%20%20%7B1%20%5Cover%20N%7D%20%5Csum_%7Bt%3D1%7D%5EN%20x%28t%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%7B1%20%5Cover%20N%7D%20%5Csum_%7Bt%3D1%7D%5EN%20x%28t%29%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Clim_%7BN%20%5Cto%20%5Cinfty%7D%20%5Csum_%7Bt%3D1%7D%5EN%20x%28t%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Csum_%7Bt%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20x%28t%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%20%5Csum_%7Bt%3D1%7D%5EN%20x%28t%29%20\"> ", "valid": false},
            ]
        },
        {
            "question": "We wzorze <img src=\"http://latex.codecogs.com/png.latex?%20%20%5Chat%20f%28x%29%20%3D%20%7BN_x%20%5Cover%20%7BN%20w%7D%7D%20\"> wielkość <img src=\"http://latex.codecogs.com/png.latex?%20%20w%20\"> jest  ",
            "tip": "",
            "answer": [
                {"text": "chwilową wartością sygnału", "valid": false},
                {"text": "chwilową wartością próbki", "valid": false},
                {"text": "oknem czasowym", "valid": false},
                {"text": "szerokością przedziału estymacji", "valid": true},
            ]
        },
        {
            "question": "Liczba próbek w algorytmie radix-2 obliczania szybkiej transformacji Fouriera musi być potęgą liczby 2 ponieważ ",
            "tip": "",
            "answer": [
                {"text": "jest to jedyna możliwość obliczenia transformacji", "valid": false},
                {"text": "próbki dzielone są na nieparzyste i parzyste i liczone są transformaty z 2 podzbiorów próbek", "valid": false},
                {"text": "próbki dzielone są na parzyste i nieparzyste aż do uzyskania podzbiorów 2-punktowych", "valid": true},
                {"text": "za część próbek odpowiada funkcja sinus a za drugą część funkcja cosinus", "valid": false},
            ]
        },
        {
            "question": "Kaskadowe połączenie dwóch liniowych układów niezmiennych w czasie, o odpowiedziach impulsowych <img src=\"http://latex.codecogs.com/png.latex?%20h_1%20%28n%20%29\"> i <img src=\"http://latex.codecogs.com/png.latex?%20h_2%20%28n%20%29\">, ma łączną odpowiedź impulsową  ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20h%20%28n%20%29%3Dh_1%20%28n%20%29%2Bh_2%20%28n%20%29\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20h%20%28n%20%29%3D%5Csum_%7Bk%3D-%5Cinfty%7D%5E%7B%5Cinfty%7Dh_1%20%28k%20%29h_2%20%28n-k%20%29\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20h%20%28n%20%29%3Dh_1%20%28n%20%29%5Ccdot%20h_2%20%28n%20%29\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20h%20%28n%20%29%3Dh_1%20%28n%20%29%2Fh_2%20%28n%20%29\"> ", "valid": false},
            ]
        },
        {
            "question": "Widmo sygnału ciągłego okresowego jest widmem ",
            "tip": "",
            "answer": [
                {"text": "dyskretnym nieokresowym", "valid": true},
                {"text": "ciągłym okresowym", "valid": false},
                {"text": "ciągłym nieokresowym", "valid": false},
                {"text": "dyskretnym okresowym", "valid": false},
            ]
        },
        {
            "question": "W poleceniu MATLAB postaci b = fir1 (n, [0.2 0.3], 'stop'), n oznacza: ",
            "tip": "",
            "answer": [
                {"text": "liczbę par zer", "valid": false},
                {"text": "liczbę pasm częstotliwości", "valid": false},
                {"text": "liczbę zer", "valid": false},
                {"text": "długość odpowiedzi impulsowej w próbkach", "valid": true},
                {"text": "liczbę par biegunów", "valid": false},
                {"text": "liczbę biegunów", "valid": false},
            ]
        },
        {
            "question": "Jeżeli ciągi czasowe <img src=\"http://latex.codecogs.com/png.latex?%20x_%7B1%7D%5Bn%5D\"> i <img src=\"http://latex.codecogs.com/png.latex?%20x_%7B2%7D%5Bn%5D\"> mają transformaty Fouriera (DFT), odpowiednio, <img src=\"http://latex.codecogs.com/png.latex?%20X_1%28m%29\"> i <img src=\"http://latex.codecogs.com/png.latex?%20X_2%28m%29\">, to dla <img src=\"http://latex.codecogs.com/png.latex?%20x_%7Bsum%7D%5Bn%5D%3Dx_1%5Bn%5D%2Bx_2%5Bn%5D\"> właściwość liniowości DTF można zapisać jako  ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20X_%7Bsum%7D%28m%29%3DX_1%28m%29%5Cstar%20X_2%28m%29\">  (splot) ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20X_%7Bsum%7D%28m%29%3DX_1%28m%29%20%2B%20X_2%28m%29\">  (suma) ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20X_%7Bsum%7D%28m%29%3DX_1%28m%29%5Ccdot%20X_2%28m%29\">  (iloczyn) ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20X_%7Bsum%7D%28m%29%3DX_1%28m%29%2FX_2%28m%29\">  (iloraz) ", "valid": false},
            ]
        },
        {
            "question": "Filtr IIR (o nieskończonej odpowiedzi impulsowej) ma 2 zera sprzężone: <img src=\"http://latex.codecogs.com/png.latex?%20z%3D%5Cpm%20j%5Ccdot%201\">. Dla jakiej pary sprzężonych biegunów taki filtr będzie stabilny?  ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20p%3D2%5Cpm%20j%5Ccdot%200.5\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20p%3D0.1%5Cpm%20j%5Ccdot%202.0\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20p%3D0.6%5Ccdot%20e%5E%7B%5Cpm%20j%5Cfrac%7B%5Cpi%7D%7B4%7D%7D\">", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20p%3D-1%5Cpm%20j%5Ccdot%201\"> ", "valid": false},
            ]
        },
        {
            "question": "Poziomą osią wykresu modułu transmitancji jest oś: ",
            "tip": "",
            "answer": [
                {"text": "wartości chwilowej", "valid": false},
                {"text": "amplitudy", "valid": false},
                {"text": "czasu", "valid": false},
                {"text": "częstotliwości", "valid": true},
                {"text": "przesunięcia", "valid": false},
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20s%28t%29%20%3D%20%5Ccos%20%282%20%5Cpi%20%28f%20%2B%20d%28t%29%20%5CDelta%20f%29%20t%29%20\"> jest zapisem matematycznym cyfrowej modulacji  ",
            "tip": "",
            "answer": [
                {"text": "fazy", "valid": false},
                {"text": "z kluczowaniem częstotliwości", "valid": true},
                {"text": "z kluczowaniem fazy", "valid": false},
                {"text": "amplitudy", "valid": false},
                {"text": "z kluczowaniem amplitudy", "valid": false},
            ]
        },
        {
            "question": "Jeśli częstotliwość próbkowania sygnału wynosi 1200Hz, to widmo amplitudowe prezentowane na wykresie może być widmem sygnału sinusoidalnego częstotliwości:<div><img class=\"qimage\" src=\"http://zts.ita.pwr.wroc.pl/moodle/file.php/35/RMrysunki//ProbkAlias1.bmp\" alt=\"\"></div> ",
            "tip": "",
            "answer": [
                {"text": "800Hz", "valid": false},
                {"text": "500Hz", "valid": true},
                {"text": "1900Hz", "valid": true},
                {"text": "700Hz", "valid": true},
                {"text": "800Hz", "valid": false},
            ]
        },
        {
            "question": "Odpowiedź impulsowa opisuje: ",
            "tip": "",
            "answer": [
                {"text": "odpowiedź systemu na impuls Gibs'a", "valid": false},
                {"text": "odpowiedź systemu na impuls Kronecker'a", "valid": true},
                {"text": "odpowiedź systemu na sygnał sinusoidalny o zadanej częstotliwości", "valid": false},
                {"text": "odpowiedź systemu na funkcję grzebieniową", "valid": false},
                {"text": "odpowiedź systemu na skok jednostkowy", "valid": false},
                {"text": "odpowiedź systemu na impuls Dirac'a", "valid": true},
            ]
        },
        {
            "question": "Proces jest całkowicie określony, jeśli: ",
            "tip": "",
            "answer": [
                {"text": "znane są dystrubuanty dowolnego rzędu", "valid": true},
                {"text": "znane są statystyki nieskończonego rzędu", "valid": false},
                {"text": "znane są statystyki dowolnego rzędu", "valid": true},
                {"text": "znane są rozkłady prawdopodobieństwa dowolnego rzędu", "valid": true},
            ]
        },
        {
            "question": "Wrażliwość struktury filtru cyfrowego opisuje ",
            "tip": "",
            "answer": [
                {"text": "wrażliwość struktury na błędy kwantowania przetwarzanych sygnałów", "valid": false},
                {"text": "wrażliwość struktury na przeprojektowywanie filtru", "valid": false},
                {"text": "wpływ błędów zaokrągleń na jakość filtracji", "valid": true},
                {"text": "wrażliwość struktury na błędy popełnione na etapie projektowania", "valid": false},
            ]
        },
        {
            "question": "W definicji <img src=\"http://latex.codecogs.com/png.latex?%20%20m%28t%29%20%3D%20E%20%5C%7B%20x%28t%29%20%5C%7D%20\"> symbol <img src=\"http://latex.codecogs.com/png.latex?%20%20E%20\"> oznacza:  ",
            "tip": "",
            "answer": [
                {"text": "wartość oczekiwaną ", "valid": true},
                {"text": "prawdopodobieństwo", "valid": false},
                {"text": "średnią arytmetyczną", "valid": false},
                {"text": "średnią geometryczną", "valid": false},
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20P%20%5C%7B%20x%28t_1%29%20%5Cleq%20x_1%2C%20x%28t_2%29%20%5Cleq%20x_2%20%5C%7D%20\"> jest definicją:  ",
            "tip": "",
            "answer": [
                {"text": "gęstości prawdopodobieństwa 2. rzędu", "valid": false},
                {"text": "rozkładu prawdopodobieństwa 2. rzędu", "valid": false},
                {"text": "dystrybuanty 1. rzędu", "valid": false},
                {"text": "rozkładu prawdopodobieństwa 1. rzędu", "valid": false},
                {"text": "gęstości prawdopodobieństwa 1. rzędu", "valid": false},
                {"text": "dystrybuanty 2. rzędu", "valid": true},
            ]
        },
        {
            "question": "Szybkość symbolowa modulacji (transmisji) zdefiniowana jest wzorem ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> jest czasem trwania symbolu ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20T%20%5Cover%20m%20\"> gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> jest czasem trwania symbolu a <img src=\"http://latex.codecogs.com/png.latex?%20%20m%20\"> jest liczbą bitów zajmowanych przez symbol ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%201%20%5Cover%20T%20\"> gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> jest czasem trwania symbolu ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20m%20%5Cover%20T%20\"> gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> jest czasem trwania symbolu a <img src=\"http://latex.codecogs.com/png.latex?%20%20m%20\"> jest liczbą bitów przypadających na symbol ", "valid": false},
            ]
        },
        {
            "question": "Wartość funkcji autokowariancji w zerze określa jednocześnie: ",
            "tip": "",
            "answer": [
                {"text": "wariancję procesu", "valid": true},
                {"text": "wartość średniokwadratową procesu", "valid": false},
                {"text": "energię procesu", "valid": false},
                {"text": "moc procesu", "valid": false},
            ]
        },
        {
            "question": "Transformacja dwuliniowa pozwala na przeliczenie ",
            "tip": "",
            "answer": [
                {"text": "położenia zer i biegunów filtru dolnoprzepustowego na dowolny inny", "valid": false},
                {"text": "położenia zer i biegunów z płaszczyzny \"s\" na płaszczyznę \"z\"", "valid": true},
                {"text": "położenia zer i biegunów z płaszczyzny \"z\" na płaszczyznę \"s\"", "valid": false},
                {"text": "położenia zer i biegunów filtru pasmowoprzepustowego na filtr pasmowozaporowy", "valid": false},
            ]
        },
        {
            "question": "Ergodyczność procesu pozwala na ",
            "tip": "",
            "answer": [
                {"text": "estymację statystyk na podstawie skończonego zbioru próbek jednej z realizacji", "valid": true},
                {"text": "zastąpienie uśredniania po czasie uśrednianiem po zbiorze", "valid": false},
                {"text": "wyznaczenie statystyk procesu na podstawie jednej realizacji ", "valid": true},
                {"text": "wyznaczenie statystyk procesu z przekroju po czasie", "valid": false},
                {"text": "zastąpienie uśredniania po zbiorze uśrednianiem po czasie", "valid": true},
            ]
        },
        {
            "question": "Probkowanie idealne (i z zachowaniem warunkow tw. Shanona) jest procesem: ",
            "tip": "",
            "answer": [
                {"text": "zawsze nieodwracalnym", "valid": false},
                {"text": "generalnie nieodwracalnym", "valid": false},
                {"text": "zawsze odwracalnym", "valid": true},
                {"text": "generalnie odwracalnym", "valid": false},
            ]
        },
        {
            "question": "Biegunów nie posiadają ",
            "tip": "",
            "answer": [
                {"text": "filtry typu IIR", "valid": false},
                {"text": "filtry eliptyczne", "valid": false},
                {"text": "filtry typu FIR", "valid": true},
                {"text": "filtry Butterwoth'a", "valid": false},
            ]
        },
        {
            "question": "Realizacją procesu nazywamy: ",
            "tip": "",
            "answer": [
                {"text": "pojedynczą funkcję będącą wynikiem losowania", "valid": true},
                {"text": "opisanie procesu za pomocą statystyk", "valid": false},
                {"text": "przekrój procesu dla ustalonego wyniku losowania", "valid": false},
                {"text": "zbiorem wszystkich funkcji, które składają się na proces", "valid": false},
            ]
        },
        {
            "question": "Od czego zależy liczba poziomów kwantyzacji przy przetwarzaniu analogowo-cyfrowym ? ",
            "tip": "",
            "answer": [
                {"text": "od liczby próbek sygnału", "valid": false},
                {"text": "od szumu kwantyzacji", "valid": false},
                {"text": "od długości słowa binarnego przetwornika", "valid": true},
                {"text": "od częstotliwości próbkowania", "valid": false},
            ]
        },
        {
            "question": "Jeśli częstotliwość próbkowania dla sygnału prezentowanego na wykresie wynosiła 4kHz, to jego długość w próbkach wynosiła około:<img width=\"508\" vspace=\"0\" border=\"0\" hspace=\"0\" height=\"259\" title=\"dlugSygnProbk\" alt=\"dlugSygnProbk\" src=\"http://zts.ita.pwr.wroc.pl/moodle/file.php/35/RMrysunki/dlugSygnProbk.png\"> ",
            "tip": "",
            "answer": [
                {"text": "800", "valid": false},
                {"text": "16000", "valid": true},
                {"text": "4000", "valid": false},
                {"text": "1000", "valid": false},
                {"text": "8000", "valid": false},
                {"text": "2000", "valid": false},
            ]
        },
        {
            "question": "Relacje między wyjściem a wejściem systemu liniowego inercyjnego niezmiennego w czasie dla czasu dyskretnego opisuje zależność ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20y%28t%29%20%3D%20%5Csum_%7Bk%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20h%28k%29%20x%28t%2Bk%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20y%28t%29%20%3D%20%5Csum_%7Bt%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20h%28k%29%20x%28t-k%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20y%28t%29%20%3D%20%5Csum_%7Bk%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20h%28k%29%20x%28k%2Bt%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20y%28t%29%20%3D%20%5Csum_%7Bk%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20h%28k%29%20x%28t-k%29%20dt%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20y%28t%29%20%3D%20%5Csum_%7Bk%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20h%28k%29%20x%28k-t%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20y%28t%29%20%3D%20%5Csum_%7Bk%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20h%28k%29%20x%28t-k%29%20\"> ", "valid": true},
            ]
        },
        {
            "question": "Transformacja dwuliniowa wykorzystywana jest do projektowania filtrów cyfrowych ",
            "tip": "",
            "answer": [
                {"text": "o nieskończonej długości impulsowej", "valid": true},
                {"text": "kratowych", "valid": false},
                {"text": "eliptycznych", "valid": true},
                {"text": "o skończonej długości odpowiedzi impulsowej", "valid": false},
                {"text": "na podstawie filtrów analogowych", "valid": true},
                {"text": "Butterworth'a", "valid": true},
            ]
        },
        {
            "question": "W definicji <img src=\"http://latex.codecogs.com/png.latex?%20%20F%28x%2Ct%29%20%3D%20P%20%5C%7Bx%28t%29%20%5Cleq%20x%5C%7D%20\">, <img src=\"http://latex.codecogs.com/png.latex?%20%20P%20\"> oznacza:  ",
            "tip": "",
            "answer": [
                {"text": "pochodną", "valid": false},
                {"text": "gęstość prawdopodobieństwa", "valid": false},
                {"text": "funkcję", "valid": false},
                {"text": "prawdopodobieństwo", "valid": true},
            ]
        },
        {
            "question": "Równoległe połączenie dwóch liniowych układów niezmiennych w czasie, o odpowiedziach impulsowych <img src=\"http://latex.codecogs.com/png.latex?%20h_1%20%28n%20%29%20\"> i <img src=\"http://latex.codecogs.com/png.latex?%20h_2%20%28n%20%29\">, ma łączną odpowiedź impulsową  ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20h%20%28n%20%29%3Dh_1%20%28n%20%29%5Ccdot%20h_2%20%28n%20%29\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20h%20%28n%20%29%3Dh_1%20%28n%20%29%20%2Bh_2%20%28n%20%29\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20h%20%28n%20%29%3D%5Csum_%7Bk%3D-%5Cinfty%7D%5E%7B%5Cinfty%7Dh_1%20%28k%20%29h_2%20%28n-k%20%29\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20h%20%28n%20%29%3Dh_1%20%28n%20%29%2Fh_2%20%28n%20%29\"> ", "valid": false},
            ]
        },
        {
            "question": "Estymator gęstości prawdopodobieństwa dany jest zależnością ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Chat%20f%28x%29%20%3D%20%7B%20N_x%20%5Cover%20w%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Chat%20f%28x%29%20%3D%20%7B%20N_x%20%5Cover%20%7BN%20x%7D%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Chat%20f%28x%29%20%3D%20%7B%20N_x%20%5Cover%20N%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Chat%20f%28x%29%20%3D%20%7B%20N_x%20%5Cover%20%7BN%20w%7D%7D%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Chat%20f%28x%29%20%3D%20%7B%20N_x%20%5Cover%20x%7D%20\"> ", "valid": false},
            ]
        },
        {
            "question": "Gęstość prawdopodobieństwa <img src=\"http://latex.codecogs.com/png.latex?%20%20f%28x_1%2C%20x_2%2C%20t_1%2C%20t_2%29%20\"> jest definiowana jako:  ",
            "tip": "",
            "answer": [
                {"text": "pochodna dystrybuanty 1-go rzędu", "valid": false},
                {"text": "druga pochodna cząstkowa dystrybuanty 1-go rzędu", "valid": false},
                {"text": "pochodna cząstkowa dystrybuanty 2-go rzędu", "valid": false},
                {"text": "druga pochodna cząstkowa dystrybuanty 2-go rzędu", "valid": true},
            ]
        },
        {
            "question": "Struktury filtrów cyfrowych różnią się ",
            "tip": "",
            "answer": [
                {"text": "liczbą zer i biegunów", "valid": false},
                {"text": "liczba elementów mnożących", "valid": true},
                {"text": "wrażliwością na błędy zaokrągleń współczynników filtru", "valid": true},
                {"text": "liczba elementów opóźniających", "valid": true},
                {"text": "liczbą elementów sumujących", "valid": true},
                {"text": "wrażliwością na błędy kwantowania ", "valid": false},
            ]
        },
        {
            "question": "Transformata Z jest równa transformacie Fouriera, jeśli ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%7C%20z%20%7C%20%3D%201%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%7C%20z%20%7C%20%3D%20%5Cinfty%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20z%20%3D%20%5Cinfty%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%7C%20z%20%7C%20%3D%200%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20z%20%3D%201%20\"> ", "valid": false},
            ]
        },
        {
            "question": "Dla systemu inercyjnego przyczynowego ",
            "tip": "",
            "answer": [
                {"text": "jego odpowiedź zależy od aktualnej wartości pobudzenia", "valid": false},
                {"text": "jego odpowiedź zależy od poprzednich w czasie wartości pobudzenia", "valid": false},
                {"text": "jego odpowiedź jest minimalnofazowa", "valid": false},
                {"text": "jego odpowiedź zależy od aktualnej i poprzednich w czasie wartości pobudzenia", "valid": true},
            ]
        },
        {
            "question": "Poziomą osią wykresu histogramu jest oś: ",
            "tip": "",
            "answer": [
                {"text": "amplitudy", "valid": false},
                {"text": "czasu", "valid": false},
                {"text": "przesunięcia", "valid": false},
                {"text": "częstotliwości", "valid": false},
                {"text": "wartości chwilowej", "valid": true},
            ]
        },
        {
            "question": "Filtracja innowacyjna nazywana jest czasem liniową predykcją, gdyż: ",
            "tip": "",
            "answer": [
                {"text": "jest to proces przewidywania (predykcji) liniowego sygnału błędu", "valid": false},
                {"text": "jest to proces przewidywania (predykcji) sygnału błędu", "valid": false},
                {"text": "przeszłe próbki sygnału przekształcane są na liniowy sygnał wyjściowy", "valid": false},
                {"text": "przeszłe próbki sygnału przekształcane są operatorem liniowym", "valid": true},
                {"text": "estymator bieżącej próbki wyznaczany jest przez liniową kombinację próbek przeszłych sygnału", "valid": true},
            ]
        },
        {
            "question": "Uklad Youle'a-Walkera nazywamy inaczej ukladem ",
            "tip": "",
            "answer": [
                {"text": "normalnym równań", "valid": true},
                {"text": "uzupełnionym równań", "valid": false},
                {"text": "nieodwracalnym równań", "valid": false},
                {"text": "pełnym równań", "valid": false},
            ]
        },
        {
            "question": "Pojęcie cyklostacjonarności dotyczy: ",
            "tip": "",
            "answer": [
                {"text": "sygnałów medycznych", "valid": false},
                {"text": "sygnałów ergodycznych", "valid": false},
                {"text": "dowolnych sygnałów telekomunikacyjnych", "valid": false},
                {"text": "sygnałów akustycznych", "valid": false},
                {"text": "sygnałów telekomunikacji cyfrowej", "valid": true},
                {"text": "dowolnych sygnałów wolnozmiennych", "valid": false},
            ]
        },
        {
            "question": "Zmienną niezależną widma amplitudowego jest: ",
            "tip": "",
            "answer": [
                {"text": "wartość chwilowa", "valid": false},
                {"text": "częstotliwość", "valid": true},
                {"text": "przesunięcie", "valid": false},
                {"text": "czas", "valid": false},
                {"text": "amplituda", "valid": false},
            ]
        },
        {
            "question": "Decymacja to proces ",
            "tip": "",
            "answer": [
                {"text": "zmniejszania wartości próbek", "valid": false},
                {"text": "zwiększania wartości próbek", "valid": false},
                {"text": "zmniejszania częstotliwości próbkowania", "valid": true},
                {"text": "zwiększania częstotliwości próbkowania", "valid": false},
            ]
        },
        {
            "question": "Szybkość bitowa modulacji (transmisji) zdefiniowana jest zależnością ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> jest czasem trwania symbolu ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20m%20%5Cover%20T%20\"> gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> jest czasem trwania symbolu a <img src=\"http://latex.codecogs.com/png.latex?%20%20m%20\"> jest liczbą bitów zajmowanych przez symbol ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%201%20%5Cover%20T%20\"> gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> jest czasem trwania symbolu  ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20T%20%5Cover%20m%20\"> gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> jest czasem trwania symbolu a <img src=\"http://latex.codecogs.com/png.latex?%20%20m%20\"> jest liczbą bitów zajmowanych przez symbol ", "valid": false},
            ]
        },
        {
            "question": "Jaka jest rozdzielczość widma (odległość pomiędzy dwoma sąsiednimi prążkami widma) (<img src=\"http://latex.codecogs.com/png.latex?%20N\"> -- liczba próbek sygnału poddawanego DFT, <img src=\"http://latex.codecogs.com/png.latex?%20f_s\"> -- częstotliwość próbkowania)  ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20f_s%2FN\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%201%2Ff_s\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20N%2Ff_s\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20N%5Ccdot%20f_s\"> ", "valid": false},
            ]
        },
        {
            "question": "Zmienną niezależną modułu transmitancji jest: ",
            "tip": "",
            "answer": [
                {"text": "przesunięcie", "valid": false},
                {"text": "częstotliwość", "valid": true},
                {"text": "czas", "valid": false},
                {"text": "amplituda", "valid": false},
                {"text": "wartość chwilowa", "valid": false},
            ]
        },
        {
            "question": "Poziomą osią wykresu widma amplitudowego jest oś: ",
            "tip": "",
            "answer": [
                {"text": "czasu", "valid": false},
                {"text": "wartości chwilowej", "valid": false},
                {"text": "amplitudy", "valid": false},
                {"text": "przesunięcia", "valid": false},
                {"text": "częstotliwości", "valid": true},
            ]
        },
        {
            "question": "W jakiej metodzie identyfikacji systemu moduł funkcji transmitancji wyznaczany jest z zależności <img src=\"http://latex.codecogs.com/png.latex?%20%20%7C%5Chat%20H%28f%29%7C%20%3D%20%5Csqrt%20%7B%7B%7B%5Chat%20S_%7Byy%7D%28f%29%7D%20%5Cover%20%7B%5Chat%20S_%7Bxx%7D%28f%29%7D%7D%7D%20\">, gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20S%20\"> oznacza widmową gęstość mocy  ",
            "tip": "",
            "answer": [
                {"text": "impulsowej", "valid": false},
                {"text": "widmowej", "valid": false},
                {"text": "sinusoidalnej", "valid": false},
                {"text": "korelacyjnej", "valid": true},
            ]
        },
        {
            "question": "W jakiej metodzie identyfikacji systemu odpowiedź impulsowa wyznaczana jest z zależności <img src=\"http://latex.codecogs.com/png.latex?%20%20%5Chat%20h%28%5Ctau%29%20%3D%20%5Chat%20R_%7Byx%7D%28%5Ctau%29%20%5Chspace%7B2pt%7D%20%2A%20%5Chspace%7B2pt%7D%20%5Chat%20R_%7Bxx%7D%5E%7B-1%7D%28%5Ctau%29%7D%20\">  ",
            "tip": "",
            "answer": [
                {"text": "korelacyjnej", "valid": true},
                {"text": "impulsowej", "valid": false},
                {"text": "widmowej", "valid": false},
                {"text": "sinusoidalnej", "valid": false},
            ]
        },
        {
            "question": "Filtry typu IIR (o nieskończonej długości odpowiedzi impulsowej) ",
            "tip": "",
            "answer": [
                {"text": "posiadają bieguny", "valid": true},
                {"text": "nie posiadają zer", "valid": false},
                {"text": "mogą być niestabilne", "valid": true},
                {"text": "nie posiadają biegunów", "valid": false},
                {"text": "są zawsze stabilne", "valid": false},
            ]
        },
        {
            "question": "Jeśli <img src=\"http://latex.codecogs.com/png.latex?%20%20t%20\"> oznacza czas dyskretny, to definicja transformaty Z ma postać  ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Csum_%7Bt%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20x%28t%29%20z%5E%7B-t%7D%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Csum_%7Bt%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20x%28t%29%20z%5E%7B-1%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Csum_%7Bt%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20x%28t%29%20z%5Et%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Csum_%7Bt%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20x%28t%29%20z%20\"> ", "valid": false},
            ]
        },
        {
            "question": "Obciążenie estymatora zdefiniowane jest zależnością ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20A%20-%20E%20%5C%7B%20%20A%20%5C%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Chat%20A%20-%20E%20%5C%7B%20A%20%5C%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Chat%20%20A%20-%20E%20%5C%7B%20%5Chat%20A%20%5C%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20A%20-%20E%20%5C%7B%20%5Chat%20A%20%5C%7D%20\"> ", "valid": true},
            ]
        },
        {
            "question": "Funkcja transmitancji filtru cyfrowego ma postać ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20A%20%7B%7B%5Cprod_%7Bk%3D0%7D%5E%7BM%7D%20%281-c_k%20z%5E%7B-k%7D%29%7D%20%5Cover%20%7B%5Cprod_%7Bk%3D0%7D%5E%7BN%7D%20%281-d_k%20z%5E%7B-k%7D%29%7D%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20A%20%7B%7B%5Cprod_%7Bk%3D1%7D%5E%7BM%7D%20%281-c_k%20z%5E%7B-1%7D%29%7D%20%5Cover%20%7B%5Cprod_%7Bk%3D1%7D%5E%7BN%7D%20%281-d_k%20z%5E%7B-1%7D%29%7D%7D%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20A%20%7B%7B%5Cprod_%7Bk%3D0%7D%5E%7BM%7D%20%281-c_k%20z%5E%7B-1%7D%29%7D%20%5Cover%20%7B%5Cprod_%7Bk%3D0%7D%5E%7BN%7D%20%281-d_k%20z%5E%7B-1%7D%29%7D%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20A%20%7B%7B%5Cprod_%7Bk%3D1%7D%5E%7BM%7D%20%281-c_k%20z%5E%7B-k%7D%29%7D%20%5Cover%20%7B%5Cprod_%7Bk%3D1%7D%5E%7BN%7D%20%281-d_k%20z%5E%7B-k%7D%29%7D%7D%20\"> ", "valid": false},
            ]
        },
        {
            "question": "Przestrzeń probabilistyczna zawiera: ",
            "tip": "",
            "answer": [
                {"text": "wyniki losowania", "valid": true},
                {"text": "realizacje", "valid": false},
                {"text": "prawdopodobieństwa zdarzeń", "valid": false},
                {"text": "dystrybuanty", "valid": false},
            ]
        },
        {
            "question": "Modulacje cyfrowe różnią się od modulacji analogowych tym, że ",
            "tip": "",
            "answer": [
                {"text": "przez kanał telekomunikacyjny przesyłany jest sygnał cyfrowy", "valid": false},
                {"text": "przez kanał telekomunikacyjny przesyłany jest  sygnał dyskretny", "valid": false},
                {"text": "sygnał modulujący jest sygnałem cyfrowym", "valid": true},
                {"text": "sygnał modulowany jest sygnałem cyfrowym", "valid": false},
                {"text": "sygnał przesyłany jest przez kanał cyfrowy", "valid": false},
            ]
        },
        {
            "question": "Modulacja QAM charakteryzuje się ",
            "tip": "",
            "answer": [
                {"text": "jednoczesnym kluczowaniem amplitudy i częstotliwości", "valid": false},
                {"text": "jednoczesnym kluczowaniem cząstotliwości i fazy", "valid": false},
                {"text": "jednoczesnym kluczowaniem amplitudy i fazy", "valid": true},
                {"text": "kluczowaniem fazy", "valid": false},
                {"text": "kluczowaniem amplitudy", "valid": false},
                {"text": "kluczowaniem cząstotliwości", "valid": false},
            ]
        },
        {
            "question": "Wariancja estymatora opisuje ",
            "tip": "",
            "answer": [
                {"text": "rozrzut wyników wokół wariancji", "valid": false},
                {"text": "rozrzut wyników wokół wartości dokładnej estymowanej wielkości", "valid": false},
                {"text": "rozrzut wyników wokół wartości średniej estymatora", "valid": true},
                {"text": "systematyczną niezgodność uzyskiwanych wyników z dokładną estymowaną wartością", "valid": false},
            ]
        },
        {
            "question": "Zaznacz właściwości spełniane przez funkcję autokorelacji procesu stacjonarnego: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R%28-%5Ctau%29%20%3D%20R%28%5Ctau%29%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R%280%29%20%5Cgeq%200%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%7CR%28%5Ctau%29%7C%20%5Cleq%20R%280%29%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%7CR%28%5Ctau%29%7C%20%5Cgeq%20R%280%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R%28%5Ctau%29%20%5Cgeq%200%20\"> ", "valid": false},
            ]
        },
        {
            "question": "Które z poniższych właściwości są słuszne dla widmowej gęstości mocy procesu stacjonarnego: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20S%28f%29%20\"> jest dodatnio określona ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20S%28f%29%20%5Cgeq%200%20%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20S%28f%29%20\"> jest zespolona ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20S%28f%29%20\"> ma maksimum w zerze ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20S%28-f%29%20%3D%20S%28f%29%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20S%28f%29%20\"> jest rzeczywista ", "valid": true},
            ]
        },
        {
            "question": "Opracowanie szybkiej transformacji Fouriera bazuje na następujących właściwościach funkcji bazowych ",
            "tip": "",
            "answer": [
                {"text": "parzystość funkcji cosinus", "valid": true},
                {"text": "okresowość", "valid": true},
                {"text": "rzeczywistość funkcji bazowych", "valid": false},
                {"text": "nieparzystość funkcji sinus", "valid": true},
                {"text": "ograniczoność funkcji bazowych w czasie", "valid": false},
            ]
        },
        {
            "question": "Wariancja estymatora zdefiniowana jest zależnością ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20E%20%5C%7B%20%7C%5Chat%20A%20-%20E%5C%7B%5Chat%20A%5C%7D%7C%5E2%20%5C%7D%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20E%20%5C%7B%20%7CA%20-%20E%5C%7B%5Chat%20A%5C%7D%7C%5E2%20%5C%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%7C%20E%20%5C%7B%20%5Chat%20A%20-%20E%5C%7B%5Chat%20A%5C%7D%20%5C%7D%20%7C%5E2%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20E%20%5C%7B%20%7C%5Chat%20A%20-%20E%5C%7B%5Chat%20A%5C%7D%7C%5C%7D%20\"> ", "valid": false},
            ]
        },
        {
            "question": "Okienkowanie sygnału (nakładanie funkcji okna) przed poddaniem go transformacji Fouriera stosuje się, aby ",
            "tip": "",
            "answer": [
                {"text": "zmniejszyć przeciek widma", "valid": true},
                {"text": "zwiększyć częstotliwość próbkowania", "valid": false},
                {"text": "usunąć szum zakłócający", "valid": false},
                {"text": "usunąć składową stałą", "valid": false},
            ]
        },
        {
            "question": "Prawdziwe jest stwierdzenie: ",
            "tip": "",
            "answer": [
                {"text": "odpowiedź impulsowa jest transformatą Fouriera z funkcji transmitancji", "valid": false},
                {"text": "odpowiedź impulsowa jest odwrotną transformatą Fouriera funkcji transmitancji", "valid": true},
                {"text": "funkcja transmitancji jest odwrotną transformatą Fouriera z odpowiedzi impulsowej", "valid": false},
                {"text": "funkcja transmitancji jest transformata Fouriera z odpowiedzi impulsowej", "valid": true},
            ]
        },
        {
            "question": "W definicji procesu stochastycznego wynikowi losowania przypisuje się: ",
            "tip": "",
            "answer": [
                {"text": "liczbę rzeczywistą lub zespoloną", "valid": false},
                {"text": "rzeczywistą lub zespoloną funkcję czasu", "valid": true},
                {"text": "prawdopodobieństwo", "valid": false},
                {"text": "rozkład prawdopodobieństwa", "valid": false},
            ]
        },
        {
            "question": "Twierdzenie ergodyczne dla wartości średniej procesu z czasem dyskretnym ma postać: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20m%20%3D%20E%20%5C%7Bx%28t%29%20%5C%7D%20%3D%20%5Clim_%7BN%20%5Cto%20%5Cinfty%7D%20%7B1%20%5Cover%20%7B2N%7D%7D%20%5Csum_%7Bt%3D-N%7D%5E%7BN%7D%20%7Bx%28t%29%7D%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20m%20%3D%20E%20%5C%7Bx%28t%29%20%5C%7D%20%3D%20%5Clim_%7BN%20%5Cto%20%5Cinfty%7D%20%20%5Csum_%7Bt%3D-N%7D%5EN%20x%28t%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20m%20%3D%20E%20%5C%7Bx%28t%29%20%5C%7D%20%3D%20%7B1%20%5Cover%20%7B2N%7D%7D%20%5Csum_%7Bt%3D-N%7D%5EN%20x%28t%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20m%20%3D%20E%20%5C%7Bx%28t%29%20%5C%7D%20%3D%20%20%5Csum_%7Bt%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20x%28t%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20m%20%3D%20E%20%5C%7Bx%28t%29%20%5C%7D%20%3D%20%5Clim_%7BN%20%5Cto%20%5Cinfty%7D%20%7B1%20%5Cover%20%7BN%7D%7D%20%5Csum_%7Bt%3D-N%7D%5EN%20x%28t%29%20\"> ", "valid": false},
            ]
        },
        {
            "question": "Błąd średniokwadratowy estymacji zdefiniowany jest zależnością ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%7C%20E%20%5C%7BA%20-%20%5Chat%20A%20%5C%7D%20%7C%5E2%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20E%20%5C%7B%20%7CA%5E2%20-%20%5Chat%20A%5E2%7C%20%5C%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20E%20%5C%7B%20%7C%5Chat%20A%20-%20E%5C%7B%5Chat%20A%5C%7D%7C%5E2%20%5C%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20E%20%5C%7B%20%7CA%20-%20%5Chat%20A%7C%5E2%20%5C%7D%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%20%7CA%20-%20%5Chat%20A%7C%5E2%20%20\"> ", "valid": false},
            ]
        },
        {
            "question": "Metody parametryczne różnią się od metod nieparametrycznych estymacji widmowej gęstości mocy tym, że ",
            "tip": "",
            "answer": [
                {"text": "przyjmowany jest model sygnału", "valid": true},
                {"text": "widmowa gęstość mocy zależy od parametrów estymacji", "valid": false},
                {"text": "zakładana jest wartość pewnych niezmienników widmowej gęstości mocy", "valid": false},
                {"text": "jesteśmy w stanie wyestymować jedynie pewne parametry widmowej gęstości mocy", "valid": false},
            ]
        },
        {
            "question": "W jakiej metodzie identyfikacji systemu moduł funkcji transmitancji wyznaczany jest z zależności <img src=\"http://latex.codecogs.com/png.latex?%20%20%7C%5Chat%20H%28f%29%7C%20%3D%20%7B%7B%5Chat%20A_y%28f%29%7D%20%5Cover%20%7B%5Chat%20A_x%28f%29%7D%7D%20\">, gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20A_x%20\"> i <img src=\"http://latex.codecogs.com/png.latex?%20%20A_y%20\"> są amplitudami sygnałów wejściowego i wyjściowego  ",
            "tip": "",
            "answer": [
                {"text": "impulsowej", "valid": false},
                {"text": "widmowej", "valid": false},
                {"text": "korelacyjnej", "valid": false},
                {"text": "sinusoidalnej", "valid": true},
            ]
        },
        {
            "question": "Szum kwantyzacji ma rozkład ",
            "tip": "",
            "answer": [
                {"text": "normalny", "valid": false},
                {"text": "wykładniczy", "valid": false},
                {"text": "Poissona", "valid": false},
                {"text": "równomierny", "valid": true},
            ]
        },
        {
            "question": "Warunek odnośnie minimalnego tłumienia filtru cyfrowego dotyczy pasma ",
            "tip": "",
            "answer": [
                {"text": "przepustowego", "valid": false},
                {"text": "minimalnego", "valid": false},
                {"text": "zaporowego", "valid": true},
                {"text": "przejściowego", "valid": false},
            ]
        },
        {
            "question": "Zmienną niezależną funkcji autokorelacji jest: ",
            "tip": "",
            "answer": [
                {"text": "czas", "valid": false},
                {"text": "częstotliwość", "valid": false},
                {"text": "amplituda", "valid": false},
                {"text": "przesunięcie", "valid": true},
                {"text": "wartość chwilowa", "valid": false},
            ]
        },
        {
            "question": "Proces stochastyczny od zmiennej losowej różni się: ",
            "tip": "",
            "answer": [
                {"text": "posiadanie jeszcze jednej zmiennej losowej jaka zwykle jest czas", "valid": false},
                {"text": "posiadaniem jeszcze jednej zmiennej niezależnej jaką zwykle jest czas", "valid": true},
                {"text": "dwoma zmiennymi niezależnymi", "valid": true},
                {"text": "kształtem rozkładu prawdopodobieństwa", "valid": false},
            ]
        },
        {
            "question": "Jeśli częstotliwość próbkowania dla sygnału prezentowanego na wykresie wynosiła 500Hz, to jego długość w próbkach wynosiła około:<img width=\"508\" vspace=\"0\" border=\"0\" hspace=\"0\" height=\"259\" title=\"dlugSygnProbk\" alt=\"dlugSygnProbk\" src=\"http://zts.ita.pwr.wroc.pl/moodle/file.php/35/RMrysunki/dlugSygnProbk.png\"> ",
            "tip": "",
            "answer": [
                {"text": "2000", "valid": true},
                {"text": "800", "valid": false},
                {"text": "4000", "valid": false},
                {"text": "1000", "valid": false},
                {"text": "8000", "valid": false},
                {"text": "16000", "valid": false},
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20E%20%5C%7B%20x%28t%29%20%5C%7D%20\"> definiuje  ",
            "tip": "",
            "answer": [
                {"text": "wartość średnią procesu stochastycznego", "valid": true},
                {"text": "rozkład prawdopodobieństwa procesu stochastycznego", "valid": false},
                {"text": "wariancję procesu stochastycznego", "valid": false},
                {"text": "wartość średniokwadratową procesu stochastycznego", "valid": false},
                {"text": "funkcję autokorelacji procesu stochastycznego", "valid": false},
            ]
        },
        {
            "question": "Która z zależności jest wzorem definicyjnym dyskretnej transformaty Fouriera (DFT): ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20X%28m%29%3D%5Csum_%7Bn%3D0%7D%5E%7BN-1%7D%20%20x_n%20%5Ccdot%20e%5E%7B%5Cfrac%7B-j2%5Cpi%20nm%7D%7BN%7D%7D\">", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20F%28s%29%3D%5Cint%20_%7B0%7D%5E%7B%5Cinfty%7Df%28t%29e%5E%7B-st%7Ddt\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20H%28z%29%3D%5Csum_%7Bn%3D-%5Cinfty%7D%5E%7B%5Cinfty%7Dh%28z%29z%5E%7B-n%7D\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20x_i%28t%29%3DH%5Bx_r%28t%29%5D%3D%5Cfrac%7B1%7D%7B%5Cpi%20%7D%5Cint_%7B-%5Cinfty%20%7D%5E%7B%5Cinfty%20%7D%5Cfrac%7Bx_r%28t%29%7D%7Bt-%5Ctau%20%7D%20d%5Ctau\">", "valid": false},
            ]
        },
        {
            "question": "Zmienną niezależną odpowiedzi impulsowej jest: ",
            "tip": "",
            "answer": [
                {"text": "wartość chwilowa", "valid": false},
                {"text": "amplituda", "valid": false},
                {"text": "częstotliwość", "valid": false},
                {"text": "czas", "valid": true},
                {"text": "przesunięcie", "valid": false},
            ]
        },
        {
            "question": "Definicja <img src=\"http://latex.codecogs.com/png.latex?%20F%28x%2Ct%29%20%3D%20P%5C%7Bx%28t%29%20%26amp%3Blt%3B%20x%5C%7D\"> jest:  ",
            "tip": "",
            "answer": [
                {"text": "definicją dystrybuanty I-go rzędu", "valid": true},
                {"text": "definicję rozkładu prawdopodobieństwa II-go rzędu", "valid": false},
                {"text": "definicją rozkładu prawdopodobieństwa I-go rzędu", "valid": false},
                {"text": "definicją dystrybuanty II-go rzędu", "valid": false},
            ]
        },
        {
            "question": "Widmo sygnału dyskretnego okresowego jest widmem ",
            "tip": "",
            "answer": [
                {"text": "ciągłym nieokresowym", "valid": false},
                {"text": "dyskretnym okresowym", "valid": true},
                {"text": "ciągłym okresowym", "valid": false},
                {"text": "dyskretnym nieokresowym", "valid": false},
            ]
        },
        {
            "question": "Proces stochastyczny musi: ",
            "tip": "",
            "answer": [
                {"text": "musi zawierać więcej niż jedną realizację", "valid": true},
                {"text": "zawierać co najmniej jedną realizację", "valid": false},
                {"text": "zawiarać conajmniej 2 realizacje", "valid": true},
                {"text": "zawiarać nieskończenie wiele realizacji", "valid": false},
            ]
        },
        {
            "question": "Filtry cyfrowe Butterworth'a charakteryzują się ",
            "tip": "",
            "answer": [
                {"text": "minimalnym tłumieniem w paśmie przepustowym", "valid": false},
                {"text": "maksymalnym tłumieniem w paśmie zaporowym", "valid": false},
                {"text": "minimalną szerokością pasma przejściowego", "valid": false},
                {"text": "maksymalnie płaskim modułem funkcji transmitancji", "valid": true},
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20E%20%5C%7Bx%28t_1%29%20x%28t_2%29%20%5C%7D%20\"> definiuje:  ",
            "tip": "",
            "answer": [
                {"text": "funkcję autokowariancji dowolnego procesu ", "valid": false},
                {"text": "funkcję autokorelacji dowolnego procesu ", "valid": true},
                {"text": "funkcję autokowariancji procesu stacjonarnego ", "valid": false},
                {"text": "funkcję autokorelacji procesu stacjonarnego", "valid": false},
            ]
        },
        {
            "question": "Dyskretna transformata Fouriera w przód zdefiniowana jest zależnością ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Csum_%7Bt%3D0%7D%5E%7BN-1%7D%20x%28t%29%20e%5E%7B-j%20%7B%7B2%20%5Cpi%7D%20%5Cover%20N%7D%20kt%7D%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Csum_%7Bt%3D0%7D%5E%7B%5Cinfty%7D%20x%28t%29%20e%5E%7B-j%202%20%5Cpi%20kt%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Csum_%7Bt%3D0%7D%5E%7B%5Cinfty%7D%20x%28t%29%20e%5E%7B-j%20%7B%7B2%20%5Cpi%7D%20%5Cover%20N%7D%20kt%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Csum_%7Bt%3D0%7D%5E%7BN-1%7D%20x%28t%29%20e%5E%7B-j%202%20%5Cpi%20kt%7D%20\"> ", "valid": false},
            ]
        },
        {
            "question": "W odbiorniku realizowane jest ",
            "tip": "",
            "answer": [
                {"text": "odtwarzanie nośnej", "valid": true},
                {"text": "dekompresja", "valid": true},
                {"text": "filtracja odszumiająca", "valid": true},
                {"text": "rozpakowanie bloków i segmentów", "valid": true},
            ]
        },
        {
            "question": "Widmo sygnału dyskretnego nieokresowego jest widmem ",
            "tip": "",
            "answer": [
                {"text": "ciągłym nieokresowym", "valid": false},
                {"text": "ciągłym okresowym", "valid": true},
                {"text": "dyskretnym nieokresowym", "valid": false},
                {"text": "dyskretnym okresowym", "valid": false},
            ]
        },
        {
            "question": "Współczynniki filtru, którego moduł transmitancji prezentowany jest na wykresie, zostały w MATLAB. obliczone poleceniem:<img src=\"http://zts.ita.pwr.wroc.pl/moodle/file.php/35/RMrysunki//filtrPP.png\" alt=\"filtrPP\" title=\"filtrPP\" border=\"0\" height=\"257\" hspace=\"0\" vspace=\"0\" width=\"508\"> ",
            "tip": "",
            "answer": [
                {"text": "[b a] = butter (12, 0.3, 'high')", "valid": false},
                {"text": "[b a] = butter (12, [0.2 0.4], 'bandpass')", "valid": false},
                {"text": "[b a] = butter (12, [0.2 0.4], 'stop')", "valid": false},
                {"text": "[b a] = butter (12, [0.3 0.6], 'bandpass')", "valid": true},
                {"text": "[b a] = butter (12, 0.3, 'low')", "valid": false},
                {"text": "[b a] = butter (12, [0.3 0.6], 'stop')", "valid": false},
            ]
        },
        {
            "question": "Lokalna stacjonarność oznacza: ",
            "tip": "",
            "answer": [
                {"text": "podobieństwo grup realizacji procesu ", "valid": false},
                {"text": "cykliczność zmian gęstości prawdopodobieństwa", "valid": false},
                {"text": "słabą stacjonarność w połączeniu ze skończonym czasem trwania procesu", "valid": false},
                {"text": "niewielkie zmiany w sygnale na krótkim odcinku czasu", "valid": true},
            ]
        },
        {
            "question": "Metody optymalizacyjne projektowania filtrów cyfrowych polegają na ",
            "tip": "",
            "answer": [
                {"text": "wybraniu takiej struktury filtracji, aby koszt obliczeń był jak najmniejszy", "valid": false},
                {"text": "znalezieniu takiej konfiguracji zer i biegunów, aby ich wzajemna odległość była jak najmniejsza", "valid": false},
                {"text": "poszukiwaniu takich wartości wpółczynników filtru aby szerokość pasma przejściowego była jak najmniejsza", "valid": false},
                {"text": "poszukiwaniu takich wartości współczynników aby osiągnąć minimum funkcji kosztów", "valid": true},
            ]
        },
        {
            "question": "Filtr minimalnofazowy posiada ",
            "tip": "",
            "answer": [
                {"text": "minimalne z możliwych zafalowania modułu transmitancji", "valid": false},
                {"text": "minimalną wartość sumy współczynników odpowiedzi impulsowej", "valid": false},
                {"text": "maksymalnie płaski moduł transmitancji", "valid": false},
                {"text": "wszystkie zera ulokowane wewnątrz okręgu jednostkowego", "valid": true},
                {"text": "wszystkie zera ulokowane na zewnątrz okręgu jednostkowego", "valid": false},
            ]
        },
        {
            "question": "Procesy stochastyczne stacjonarne, dla których funkcja korelacji wzajemnej jest równa zero dla dowolnego opóźnienia nazywamy procesami: ",
            "tip": "",
            "answer": [
                {"text": "ortogonalnymi", "valid": true},
                {"text": "zerowymi", "valid": false},
                {"text": "niepowiązanymi", "valid": false},
                {"text": "liniowo-niezależnymi", "valid": false},
                {"text": "statystycznie niezależnymi", "valid": false},
                {"text": "lokalnie stacjonarnymi", "valid": false},
            ]
        },
        {
            "question": "Dyskretna odwrotna transformata Fouriera zdefiniowana jest zależnością ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20x%28t%29%20%3D%20%7B1%20%5Cover%20N%7D%20%5Csum_%7Bk%3D0%7D%5E%7BN-1%7D%20X%28k%29%20e%5E%7Bj%20%7B%7B2%20%5Cpi%7D%20%5Cover%20N%7D%20kt%7D%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20x%28t%29%20%3D%20%7B1%20%5Cover%20N%7D%20%5Csum_%7Bt%3D0%7D%5E%7B%5Cinfty%7D%20X%28k%29%20e%5E%7Bj%20%7B%7B2%20%5Cpi%7D%20%5Cover%20N%7D%20kt%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20x%28t%29%20%3D%20%7B1%20%5Cover%20N%7D%20%5Csum_%7Bk%3D0%7D%5E%7B%5Cinfty%7D%20X%28k%29%20e%5E%7Bj%20%7B%7B2%20%5Cpi%7D%20%5Cover%20N%7D%20kt%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20x%28t%29%20%3D%20%7B1%20%5Cover%20N%7D%20%5Csum_%7Bt%3D0%7D%5E%7BN-1%7D%20X%28k%29%20e%5E%7Bj%20%7B%7B2%20%5Cpi%7D%20%5Cover%20N%7D%20kt%7D%20\"> ", "valid": false},
            ]
        },
        {
            "question": "Jeżeli w próbkowanym sygnale maksymalna częstotliwość ma wartość <img src=\"http://latex.codecogs.com/png.latex?%20f_%7Bmax%7D\">, to twierdzenie o próbkowaniu mówi, że minimalna częstotliwość poprawnego próbkowania musi być:  ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20f_s%5Cge%2010%5Ccdot%20f_%7Bmax%7D\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20f_s%3Df_%7Bmax%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20f_s%5Cge%20f_%7Bmax%7D\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20f_s%5Cge%202%5Ccdot%20f_%7Bmax%7D\"> ", "valid": true},
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20d%28t%29%20%3D%20%5Csum_%7Bn%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20a_n%20%5Chspace%7B2pt%7D%20g%28t-nT%29%20\"> opisuje sygnał telekomunikacyjny  ",
            "tip": "",
            "answer": [
                {"text": "dyskretny na częstotliwości pośredniej", "valid": false},
                {"text": "analogowy na częstotliwości nośnej", "valid": false},
                {"text": "analogowy na częstotliwości pośredniej", "valid": false},
                {"text": "dyskretny na częstotliwości nośnej", "valid": false},
                {"text": "analogowy w paśmie podstawowym", "valid": true},
                {"text": "dyskretny w paśmie podstawowym", "valid": false},
            ]
        },
        {
            "question": "W ogólnym przypadku, zmienną niezależną dystrybuanty I-rzędu procesu stochastycznego jest: ",
            "tip": "",
            "answer": [
                {"text": "prawdopodobieństwo", "valid": false},
                {"text": "czas", "valid": true},
                {"text": "sygnał", "valid": false},
                {"text": "wynik losowania", "valid": false},
                {"text": "wartość chwilowa sygnału", "valid": true},
            ]
        },
        {
            "question": "Widmo sygnału ciągłego nieokresowego jest widmem ",
            "tip": "",
            "answer": [
                {"text": "dyskretnym okresowym", "valid": false},
                {"text": "dyskretnym nieokresowym", "valid": false},
                {"text": "ciągłym nieokresowym", "valid": true},
                {"text": "ciągłym okresowym", "valid": false},
            ]
        },
        {
            "question": "Założenie o ergodyczności pozwala na: ",
            "tip": "",
            "answer": [
                {"text": "skorzystanie z pojęcia lokalnej stacjonarności", "valid": false},
                {"text": "zastąpienie uśredniania po zbiorze uśrednianiem po czasie przy wyznaczaniu statystyk procesu ", "valid": true},
                {"text": "wyznaczenie estymatorów statystyk procesu na podstawie jednej realizacji", "valid": true},
                {"text": "wyznaczenie statystyk procesu stacjonarnego", "valid": false},
                {"text": "wyznaczenie statystyk procesu dysponując jedynie jedną realizacją", "valid": true},
            ]
        },
        {
            "question": "Zaznacz prawdziwe zależności dotyczące dystrybuanty 2-go rzędu: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20F%28x_2%2C%20-%20%5Cinfty%2C%20t_1%2C%20t_2%29%20%3D%200%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20F%28-%20%5Cinfty%2C%20x_2%2C%20t_1%2C%20t_2%29%20%3D%200%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20F%28%20%5Cinfty%2C%20x_2%2C%20t_1%2C%20t_2%29%20%3D%20F%28x_2%2C%20t_2%29%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20F%28x_1%2C%20%20%5Cinfty%2C%20t_1%2C%20t_2%29%20%3D%20F%28x_1%2C%20t_1%29%20\"> ", "valid": true},
            ]
        },
        {
            "question": "Obciążenie estymatora opisuje ",
            "tip": "",
            "answer": [
                {"text": "na ile średnio wynik estymacji różnił się będzie od dokładnej wartości", "valid": true},
                {"text": "na ile dany wynik będzie się różnił od poprzedniego wyniku", "valid": false},
                {"text": "na ile dany wynik będzie się różnił od wartości dokładnej", "valid": false},
                {"text": "rozrzut wyników wokół wartości średniej wyników estymacji", "valid": false},
            ]
        },
        {
            "question": "Współczynniki filtru FIR (o skończonej odpowiedzi impulsowej) to ",
            "tip": "",
            "answer": [
                {"text": "wartości prążków widma sygnału wejściowego filtru", "valid": false},
                {"text": "ciąg wartości odpowiedzi impulsowej filtru", "valid": true},
                {"text": "transformata Fouriera odpowiedzi impulsowej", "valid": false},
                {"text": "zera i bieguny filtru", "valid": false},
            ]
        },
        {
            "question": "Estymator wariancji procesu dany jest zależnością ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Csum_%7Bt%3D1%7D%5EN%20%5Bx%28t%29%20-%20%5Chat%20m%5D%5E2%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%20%5Csum_%7Bt%3D1%7D%5EN%20%5Bx%28t%29%20-%20%5Chat%20m%5D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%7B1%20%5Cover%20N%7D%20%5Csum_%7Bt%3D1%7D%5EN%20%5Bx%28t%29%20-%20%5Chat%20m%5D%5E2%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%7B1%20%5Cover%20N%7D%20%5Csum_%7Bt%3D1%7D%5EN%20%5Bx%28t%29%20-%20%5Chat%20m%5D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Clim_%7BN%20%5Cto%20%5Cinfty%7D%20%7B1%20%5Cover%20N%7D%20%5Csum_%7Bt%3D1%7D%5EN%20%5Bx%28t%29%20-%20%5Chat%20m%5D%5E2%20\"> ", "valid": false},
            ]
        },
        {
            "question": "Która z poniżej prezentowanych definicji łącznej dystrybuantu 2-go rzędu jest poprawna: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20F%28x%2Cy%2Ct_1%2Ct_2%29%20%3D%20P%20%5C%7B%20x%28t_1%29%20%5Cleq%20x%2C%20y%28t_2%29%20%5Cleq%20y%20%5C%7D%20\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20f%28x%2Cy%2Ct_1%2Ct_2%29%20%3D%20%7B%7B%5Cdelta%5E2%20F%28x%2Cy%2Ct_1%2Ct_2%29%20%7D%20%5Cover%20%7B%5Cdelta%20x%20%5Cdelta%20y%7D%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20F%28x%2Cy%2Ct_1%2Ct_2%29%20%3D%20P%20%5C%7B%20x%28t_1%29%20%5Cleq%20x_1%2C%20y%28t_2%29%20%5Cleq%20y_1%20%5C%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20F%28x%2Cy%2Ct_1%2Ct_2%29%20%3D%20F%28x%2Cy%2Ct_1%20%2B%20%5Cepsilon%2C%20t_2%20%2B%20%5Cepsilon%29%20\"> ", "valid": false},
            ]
        },
        {
            "question": "Proces normalny (gaussowski) to taki proces, którego: ",
            "tip": "",
            "answer": [
                {"text": "widmowa gęstość mocy jest krzywą Gaussa", "valid": false},
                {"text": "autokorelacja jest krzywą Gaussa", "valid": false},
                {"text": "rozkład prawdopodobieństwa jest krzywą Gaussa", "valid": true},
                {"text": "dystrybuanta jest krzywą Gaussa", "valid": false},
            ]
        },
        {
            "question": "Estymacja to ",
            "tip": "",
            "answer": [
                {"text": "oszacowanie statystyki bądź parametru procesu stochastycznego na podstawie skończonego zbioru próbek jednej z realizacji", "valid": true},
                {"text": "oszacowanie statystyki lub parametru procesu stochastycznego na podstawie skończonego zbioru próbek kilku realizacji", "valid": false},
                {"text": "oszacowanie statystyki bądź parametru procesu stochastycznego na podstawie jednej realizacji", "valid": false},
                {"text": "odtworzenie sygnału analogowego na podstawie próbek sygnału cyfrowego", "valid": false},
                {"text": "oszacowanie wartości sygnału analogowego na podstawie próbek sygnału", "valid": false},
                {"text": "oszacowanie przyszłej wartości procesu stochastycznego na podstawie zbioru próbek", "valid": false},
            ]
        },
        {
            "question": "W zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20d%28t%29%20%3D%20%5Csum_%7Bn%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20a_n%20%5Chspace%7B2pt%7D%20g%28t-nT%29%20\"> opisującej sygnał telekomunikacyjny, <img src=\"http://latex.codecogs.com/png.latex?%20%20g%20\"> jest  ",
            "tip": "",
            "answer": [
                {"text": "filtrem nadawczym", "valid": true},
                {"text": "oknem czasowym kształtującym widmo sygnału", "valid": true},
                {"text": "filtrem transmisyjnym", "valid": true},
                {"text": "oknem częstotliwościowym kształtującym widmo sygnału", "valid": false},
            ]
        },
        {
            "question": "Kwantowanie idealne (tj. bez bledow numerycznych) jest procesem: ",
            "tip": "",
            "answer": [
                {"text": "zawsze nieodwracalnym", "valid": false},
                {"text": "generalnie odwracalnym", "valid": false},
                {"text": "zawsze odwracalnym", "valid": false},
                {"text": "generalnie nieodwracalnym", "valid": true},
            ]
        },
        {
            "question": "W zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20d%28t%29%20%3D%20%5Csum_%7Bn%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20a_n%20%5Chspace%7B2pt%7D%20g%28t-nT%29%20\"> opisującej sygnał telekomunikacyjny, <img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> jest  ",
            "tip": "",
            "answer": [
                {"text": "czasem trwania symbolu", "valid": true},
                {"text": "czasem trwania bitu informacji", "valid": false},
                {"text": "odstępem pomiędzy próbkami ", "valid": false},
                {"text": "okresem drgań nośnej", "valid": false},
                {"text": "czasem trwania próbki ", "valid": false},
            ]
        },
        {
            "question": "Okno <img src=\"http://latex.codecogs.com/png.latex?%20%20w%20\"> w metodach estymacji widma stosowane jest w celu  ",
            "tip": "",
            "answer": [
                {"text": "zmniejszenia przecieku widma", "valid": true},
                {"text": "zmniejszenia wariancji estymatora wgm", "valid": true},
                {"text": "wygładzenia sygnału", "valid": false},
                {"text": "wycięcia fragmentu sygnału", "valid": false},
                {"text": "zmniejszenia szerokości pasma przejściowego", "valid": false},
            ]
        },
        {
            "question": "Poziomą osią wykresu funkcji autokorelacji jest oś: ",
            "tip": "",
            "answer": [
                {"text": "przesunięcia", "valid": true},
                {"text": "wartości chwilowej", "valid": false},
                {"text": "amplitudy", "valid": false},
                {"text": "częstotliwości", "valid": false},
                {"text": "czasu", "valid": false},
            ]
        },
        {
            "question": "W zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20d%28t%29%20%3D%20%5Csum_%7Bn%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20a_n%20%5Chspace%7B2pt%7D%20g%28t-nT%29%20\"> opisującej sygnał telekomunikacyjny, <img src=\"http://latex.codecogs.com/png.latex?%20%20a_n%20\"> jest  ",
            "tip": "",
            "answer": [
                {"text": "ciągiem symboli zawierających informację", "valid": false},
                {"text": "ciągiem wartości odpowiadających symbolom", "valid": true},
                {"text": "ciągiem wartości odpowiadających bitom", "valid": false},
                {"text": "ciągiem bitów zawierających informację", "valid": false},
                {"text": "sygnałem dyskretnym przed modulacją", "valid": false},
            ]
        },
        {
            "question": "Po stronie nadawczej realizowane są następujące operacje ",
            "tip": "",
            "answer": [
                {"text": "kompresja", "valid": true},
                {"text": "kodowanie", "valid": true},
                {"text": "odtwarzanie nośnej", "valid": false},
                {"text": "filtracja odszumiająca", "valid": false},
                {"text": "formowanie bloków i segmentów", "valid": true},
                {"text": "dekompresja", "valid": false},
            ]
        },
        {
            "question": "W definicji transformacji Z <img src=\"http://latex.codecogs.com/png.latex?%20%20%5Csum_%7B-%5Cinfty%7D%5E%7B%5Cinfty%7D%20x%28t%29%20z%5E%7B-t%7D%20\"> wielkość <img src=\"http://latex.codecogs.com/png.latex?%20%20z%20\"> oznacza  ",
            "tip": "",
            "answer": [
                {"text": "funkcję rzeczywistą", "valid": false},
                {"text": "funkcje zespoloną", "valid": false},
                {"text": "liczbę zespoloną", "valid": true},
                {"text": "liczbę urojoną", "valid": false},
                {"text": "funkcję urojoną", "valid": false},
                {"text": "liczbę rzeczywistą", "valid": false},
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20s%28t%29%20%3D%20d%28t%29%20%5Ccos%282%20%5Cpi%20f%20t%20%29%20\"> jest zapisem matematycznym cyfrowej modulacji  ",
            "tip": "",
            "answer": [
                {"text": "z kluczowaniem cząstotliwości", "valid": false},
                {"text": "z kluczowaniem amplitudy", "valid": true},
                {"text": "fazy", "valid": false},
                {"text": "częstotliwości", "valid": false},
                {"text": "z kluczowaniem fazy", "valid": false},
            ]
        },
        {
            "question": "Zwielokrotnienie TDMA (time division multiple access) oznacza ",
            "tip": "",
            "answer": [
                {"text": "jednoczesna pracę wielu użytkowników na tej samej częstotliwości i w tym samym czasie", "valid": false},
                {"text": "jednoczesną pracę wielu użytkowników w tym samym czasie na zmieniających się częstotliwościach", "valid": false},
                {"text": "jednoczesną pracę wielu użytkowników na tej samej częstotliwości", "valid": true},
                {"text": "jednoczesną pracę wielu użytkowników z wykorzystaniem różnych kodów dostępu", "valid": false},
            ]
        },
        {
            "question": "Modulacja QAM charakteryzuje się wykorzystaniem ",
            "tip": "AM - Amplitude Modulation",
            "answer": [
                {"text": "dwóch nośnych o zbliżonych częstotliwościach przesuniętych o 180st", "valid": false},
                {"text": "dwóch nośnych o tej samej częstotliwości przesuniętych o 90st", "valid": true},
                {"text": "dwóch nośnych o tej samej częstotliwości przesuniętych o 180st", "valid": false},
                {"text": "dwóch nośnych o zbliżonych częstotliwościach przesuniętych o 90st", "valid": false},
            ]
        },
        {
            "question": "Cyklostacjonarność definiowana jest dla: ",
            "tip": "",
            "answer": [
                {"text": "sygnałów okresowych", "valid": false},
                {"text": "dowolnych sygnałów stacjonarnych", "valid": false},
                {"text": "sygnałów telekomunikacji cyfrowej", "valid": true},
                {"text": "sygnałów telekomunikacyjnych", "valid": false},
            ]
        },
        {
            "question": "Estymator funkcji autokorelacji procesu zdefiniowany jest zależnością ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R_%7Bxx%7D%28k%29%20%3D%20%20%5Csum_%7Bt%3D1%7D%5E%7BN-k%7D%20x%28k%29x%28t%2Bk%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R_%7Bxx%7D%28k%29%20%3D%20%20%5Csum_%7Bt%3D1%7D%5E%7BN-k%7D%20x%28t%29x%28t%2Bk%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R_%7Bxx%7D%28k%29%20%3D%20%7B1%20%5Cover%20%7BN-k%7D%7D%20%5Csum_%7Bt%3D1%7D%5E%7BN-k%7D%20x%28k%29x%28t%2Bk%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20R_%7Bxx%7D%28k%29%20%3D%20%7B1%20%5Cover%20%7BN-k%7D%7D%20%5Csum_%7Bt%3D1%7D%5E%7BN-k%7D%20x%28t%29x%28t%2Bk%29%20\"> ", "valid": true},
            ]
        },
        {
            "question": "Jeśli <img src=\"http://latex.codecogs.com/png.latex?%20%20%5Calpha%20\"> jest poziomem ufności a <img src=\"http://latex.codecogs.com/png.latex?%20%20%5Ba%2Cb%5D%20\"> jest przedziałem ufności estymatora <img src=\"http://latex.codecogs.com/png.latex?%20%20%5Chat%20A%20\"> o rozkładzie <img src=\"http://latex.codecogs.com/png.latex?%20%20f%28%5Chat%20A%29%20\">, to prawdziwa jest zależność  ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Ba%2Cb%5D%20%3D%20%5Cint_a%5Eb%20f%28%5Calpha%29%20d%20%5Calpha%20\">  ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Ba%2Cb%5D%20%3D%20%5Cint_%7B-%5Cinfty%7D%5E%5Cinfty%7D%20f%28%5Calpha%29%20d%20%5Calpha%20\">  ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Calpha%20%3D%20%5Cint_%7B-%5Cinfty%7D%5E%7B%5Cinfty%7D%20f%28%5Chat%20A%29%20d%20%5Chat%20A%20\">  ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Calpha%20%3D%20%5Cint_a%5Eb%20f%28%5Chat%20A%29%20d%20%5Chat%20A%20\">  ", "valid": true},
            ]
        },
        {
            "question": "Poziomą osią wykresu odpowiedzi impulsowej jest oś: ",
            "tip": "",
            "answer": [
                {"text": "wartości chwilowej", "valid": false},
                {"text": "częstotliwości", "valid": false},
                {"text": "amplitudy", "valid": false},
                {"text": "czasu", "valid": true},
                {"text": "przesunięcia", "valid": false},
            ]
        },
        {
            "question": "Wynikiem transformacja Fouriera sygnału rzeczywistego w ogólnym przypadku jest ",
            "tip": "",
            "answer": [
                {"text": "funkcja rzeczywista", "valid": false},
                {"text": "funkcja zespolona", "valid": true},
                {"text": "liczba rzeczywista", "valid": false},
                {"text": "liczba zespolona", "valid": false},
            ]
        },
        {
            "question": "W celu uzyskania częstotliwości unormowanej (przy projektowaniu filtrów cyfrowych) ",
            "tip": "",
            "answer": [
                {"text": "częstotliwości próbkowania dzielimy przez rzeczywistą częstotliwość", "valid": false},
                {"text": "częstotliwość próbkowania dzielimy przez podwójna rzeczywistą częstotliwość", "valid": false},
                {"text": "rzeczywistą częstotliwość dzielimy przez podwójną częstotliwości próbkowania", "valid": false},
                {"text": "rzeczywistą częstotliwość dzielimy przez częstotliwości próbkowania", "valid": true},
            ]
        },
        {
            "question": "Szerokość pasma przejściowego filtru cyfrowego nie może być zerowa, ponieważ ",
            "tip": "",
            "answer": [
                {"text": "taki filtr byłby filtrem nieprzyczynowym", "valid": false},
                {"text": "wzmocnienie takiego filtru byłoby nieskończenie wielkie", "valid": false},
                {"text": "przejście pomiędzy pasmem przepustowym a zaporowym nie może się odbywać w nieskończenie krótkim czasie", "valid": false},
                {"text": "liczba zer lub biegunów musiałaby być nieskończona", "valid": true},
            ]
        },
        {
            "question": "Filtr cyfrowy jest stabilny, jeśli ",
            "tip": "",
            "answer": [
                {"text": "bieguny transmitancji leżą wewnątrz okręgu jednostkowego", "valid": true},
                {"text": "zera i bieguny transmitancji leżą wewnątrz okręgu jednostkowego", "valid": false},
                {"text": "bieguny transmitancji leżą w lewej półpłaszczyźnie", "valid": false},
                {"text": "zera transmitancji leżą w lewej półpłaszczyżnie", "valid": false},
                {"text": "zera transmitancji leżą wewnątrz okręgu jednostkowego", "valid": false},
            ]
        },
        {
            "question": "Zmienną niezależną histogramu jest: ",
            "tip": "",
            "answer": [
                {"text": "przesunięcie", "valid": false},
                {"text": "czas", "valid": false},
                {"text": "wartość chwilowa", "valid": true},
                {"text": "amplituda", "valid": false},
                {"text": "częstotliwość", "valid": false},
            ]
        },
        {
            "question": "Przeciek widma w wyniku transformacji Fouriera występuje ponieważ ",
            "tip": "",
            "answer": [
                {"text": "występują błędy kwantowania", "valid": false},
                {"text": "dokonano uzupełnienia sygnału zerowymi próbkami", "valid": true},
                {"text": "występuje efekt obcięcia", "valid": true},
                {"text": "sygnał nie jest symetryczny", "valid": false},
                {"text": "występują błędy próbkowania", "valid": false},
            ]
        },
        {
            "question": "Do zbudowania grafu przepływu filtra cyfrowego potrzebne są elementy ",
            "tip": "",
            "answer": [
                {"text": "mnożące próbkę przez liczbę", "valid": true},
                {"text": "sumujące kilka próbek", "valid": false},
                {"text": "sumujące 2 próbki", "valid": true},
                {"text": "rotujące", "valid": false},
                {"text": "opóźniające", "valid": true},
                {"text": "mnożące próbki", "valid": false},
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20C%28t_1%2Ct_2%29%20%3D%20E%20%5C%7B%20%5Bx%28t_1%29%20-%20m%28t_1%29%5D%5Bx%28t_2%29%20-%20m%28t_2%29%5D%20%5C%7D%20\"> definiuje:  ",
            "tip": "",
            "answer": [
                {"text": "funkcję autokorelacji dowolnego procesu ", "valid": false},
                {"text": "funkcję autokorelacji procesu stacjonarnego", "valid": false},
                {"text": "funkcję autokowariancji procesu stacjonarnego", "valid": false},
                {"text": "funkcję autokowariancji dowolnego procesu", "valid": true},
            ]
        },
        {
            "question": "Jedną z metod projektowania filtrów o skończonej długości odpowiedzi impulsowej jest metoda ",
            "tip": "",
            "answer": [
                {"text": "linearyzacji charakterystyki", "valid": false},
                {"text": "projekcji ortogonalnej", "valid": false},
                {"text": "okna", "valid": true},
                {"text": "transformacji dwuliniowej", "valid": false},
                {"text": "skończonych iteracji", "valid": false},
            ]
        },
        {
            "question": "Aby możliwe było przeprowadzenie estymacji, proces musi być procesem ",
            "tip": "",
            "answer": [
                {"text": "dobrze uwarunkowanym", "valid": false},
                {"text": "stacjonarnym", "valid": false},
                {"text": "niezmiennym w czasie", "valid": false},
                {"text": "stacjonarnym i ergodycznym", "valid": true},
                {"text": "ergodycznym", "valid": false},
            ]
        },
        {
            "question": "Estymator jest wielkością losową, ponieważ zależy od ",
            "tip": "",
            "answer": [
                {"text": "wyboru fragmentów realizacji", "valid": false},
                {"text": "realizacji próbkowania i kwantowania sygnału", "valid": false},
                {"text": "wyboru fragmentu realizacji", "valid": true},
                {"text": "liczby próbek", "valid": false},
            ]
        },
        {
            "question": "Zależność ",
            "tip": "",
            "answer": [
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20s%28t%29%20%3D%20%5Ccos%20%282%20%5Cpi%20f%20t%20%2B%20%7B2%20%5Cpi%20%5Cover%20M%20%7Dd%28t%29%29%20\"> jest zapisem matematycznym cyfrowej modulacji  ",
            "tip": "",
            "answer": [
                {"text": "z kluczowaniem amplitudy", "valid": false},
                {"text": "częstotliwości", "valid": false},
                {"text": "z kluczowaniem fazy", "valid": true},
                {"text": "amplitudy", "valid": false},
                {"text": "z kluczowaniem częstotliwości", "valid": false},
            ]
        }
    ]
}