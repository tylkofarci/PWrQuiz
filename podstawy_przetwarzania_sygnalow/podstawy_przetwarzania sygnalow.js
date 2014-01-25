var test = {
    "time": 30,
    "testQuestionCount": 30,
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
                {"text": "funkcj&#281; autokowariancji procesu niestacjonarnego", "valid": false},
                {"text": "widmow&#261; g&#281;sto&#347;&#263; mocy procesu niestacjonarnego", "valid": true},
                {"text": "funkcj&#281; autokorelacji procesu niestacjonarnego", "valid": false},
                {"text": "dystrybuant&#281; 2-go rz&#281;du procesu niestacjonarnego", "valid": false},
            ]
        },
        {
            "question": "Metoda Burg'a estymacji widmowej gęstości mocy jest metodą ",
            "tip": "",
            "answer": [
                {"text": "parametryczn&#261;", "valid": true},
                {"text": "efektywn&#261;", "valid": false},
                {"text": "nieparametryczn&#261;", "valid": false},
                {"text": "podprzestrzeni", "valid": false},
            ]
        },
        {
            "question": "Dla układu dyskretnego niezmiennego w czasie (<img src=\"http://latex.codecogs.com/png.latex?%20x%20%28%20n%20%29%20\"> - sygna&#322; wej&#347;ciowy, <img src=\"http://latex.codecogs.com/png.latex?%20h%20%28%20n%20%29%20\"> - odpowied&#378; impulsowa uk&#322;adu, <img src=\"http://latex.codecogs.com/png.latex?%20y%20%28%20n%20%29%20\"> - sygna&#322; wyj&#347;ciowy)  ",
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
                {"text": "liczba opisuj&#261;ca efektywno&#347;&#263; modulacji", "valid": false},
                {"text": "liczba bit&#243;w zajmowanych przez pojedynczy symbol", "valid": false},
                {"text": "liczba warto&#347;ci jaka mo&#380;e przyj&#261;&#263; ka&#380;dy z symboli", "valid": true},
                {"text": "liczba no&#347;nych u&#380;ytych w modulacji", "valid": false},
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
                {"text": "jest wielko&#347;ci&#261; losow&#261;", "valid": true},
                {"text": "posiada rozk&#322;ad prawdopodobie&#324;stwa", "valid": true},
                {"text": "jest statystycznie niezale&#380;ny", "valid": false},
                {"text": "jest wielko&#347;ci&#261; deterministyczn&#261;", "valid": false},
                {"text": "jest nieskorelowany", "valid": false},
            ]
        },
        {
            "question": "Okno w metodzie okna projektowania filtrów cyfrowych stosowane jest w celu ",
            "tip": "",
            "answer": [
                {"text": "zmniejszenia t&#322;umienia w pa&#347;mie przepustowym", "valid": false},
                {"text": "likwidacji przecieku widma", "valid": false},
                {"text": "zmniejszenia szeroko&#347;ci pasma przej&#347;ciowego", "valid": false},
                {"text": "zwi&#281;kszenia t&#322;umienia w pa&#347;mie zaporowym", "valid": true},
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
                {"text": "przekr&#243;j procesu po czasie", "valid": false},
                {"text": "N pr&#243;bek jednej z realizacji", "valid": true},
                {"text": "przekr&#243;j procesu po zbiorze", "valid": false},
                {"text": "pr&#243;bki jednej z realizacji", "valid": false},
                {"text": "N pr&#243;bek kilku realizacji", "valid": false},
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
                {"text": "g&#281;sto&#347;&#263; prawdopodobie&#324;stwa 1-go rz&#281;du", "valid": false},
                {"text": "dystrubuant&#281; 1-go rz&#281;du", "valid": true},
                {"text": "prawdopodobie&#324;stwo wyst&#261;pienia warto&#347;ci <img src=\"http://latex.codecogs.com/png.latex?%20x\"> sygna&#322;u ", "valid": false},
            ]
        },
        {
            "question": "Interpolacja to proces ",
            "tip": "",
            "answer": [
                {"text": "zmniejszania warto&#347;ci pr&#243;bek", "valid": false},
                {"text": "zmniejszania cz&#281;stotliwo&#347;ci pr&#243;bkowania", "valid": false},
                {"text": "zwi&#281;kszania warto&#347;ci pr&#243;bek", "valid": false},
                {"text": "zwi&#281;kszania cz&#281;stotliwo&#347;ci pr&#243;bkowania", "valid": true},
            ]
        },
        {
            "question": "W wyniku <img src=\"http://latex.codecogs.com/png.latex?%20N\">-punktowej DFT powstaje ci&#261;g <img src=\"http://latex.codecogs.com/png.latex?%20N\">-elementowy. W ci&#261;gu tym liczba niezale&#380;nych wyraz&#243;w wynosi  ",
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
                {"text": "dystrybuant&#261;", "valid": false},
                {"text": "zmienn&#261; losow&#261;", "valid": true},
                {"text": "realizacj&#261;", "valid": false},
                {"text": "rozk&#322;adem prawdopodobie&#324;stwa", "valid": false},
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
                {"text": "dystrybuant&#281; 1-go rz&#281;du", "valid": false},
                {"text": "transformacj&#281; falkow&#261;", "valid": false},
                {"text": "dystrybuant&#281; 2-go rz&#281;du", "valid": false},
                {"text": "dwuwymiarow&#261; transformacj&#281; Fouriera", "valid": true},
            ]
        },
        {
            "question": "Filtry cyfrowe eliptyczne charakteryzują się ",
            "tip": "",
            "answer": [
                {"text": "zafalowaniami w pasmach przepustowym i zaporowym", "valid": true},
                {"text": "maksymalnie p&#322;askim modu&#322;em funkcji transmitancji", "valid": false},
                {"text": "zafalowaniami tylko w pa&#347;mie przepustowym", "valid": false},
                {"text": "zafalowaniami tylko w pa&#347;mie zaporowym", "valid": false},
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
                {"text": "przej&#347;ciowego", "valid": false},
                {"text": "zaporowego", "valid": false},
                {"text": "przepustowego", "valid": true},
            ]
        },
        {
            "question": "Filtry typu FIR (o skończonej długości odpowiedzi impulsowej) ",
            "tip": "",
            "answer": [
                {"text": "posiadaj&#261; liniow&#261; faz&#281;", "valid": false},
                {"text": "nie posiadaj&#261; biegun&#243;w", "valid": true},
                {"text": "mog&#261; mie&#263; liniow&#261; faz&#281;", "valid": true},
                {"text": "s&#261; zawsze stabilne", "valid": true},
                {"text": "nie posiadaj&#261; zer", "valid": false},
                {"text": "mog&#261; by&#263; niestabilne", "valid": false},
            ]
        },
        {
            "question": "Aliasing to ",
            "tip": "",
            "answer": [
                {"text": "nak&#322;adanie si&#281; na siebie widma oryginalnego i widma powtarzanego w otoczeniu po&#322;owy cz&#281;stotliwo&#347;ci pr&#243;bkowania", "valid": true},
                {"text": "rozmycie pr&#261;&#380;ka DFT", "valid": false},
                {"text": "to samo co przeciek widma", "valid": false},
                {"text": "przesuni&#281;cie fazy pr&#261;&#380;ka DFT", "valid": false},
            ]
        },
        {
            "question": "Estymator widmowej gęstości mocy procesu można uzyskać z zależności (<img src=\"http://latex.codecogs.com/png.latex?%20%20FT%20\"> oznacza transformacj&#281; Fouriera)  ",
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
                {"text": "sygna&#322; na jego wyj&#347;ciu zmienia si&#281; niezale&#380;nie od sygna&#322;u wej&#347;ciowego", "valid": false},
                {"text": "odpowied&#378; impulsowa jest zale&#380;na od czasu pobudzenia systemu", "valid": true},
                {"text": "odpowied&#380; systemu w danej chwili czasu zale&#380;y jedynie od sygna&#322;u na wej&#347;ciu w tej samej chwili czasu", "valid": false},
                {"text": "funkcja transmitancji jest funkcj&#261; zar&#243;wno cz&#281;stotliwo&#347;ci jak i czasu", "valid": true},
            ]
        },
        {
            "question": "W poleceniu MATLAB postaci [b a] = butter (N, [0.2 0.3], 'stop'), N oznacza: ",
            "tip": "",
            "answer": [
                {"text": "liczb&#281; biegun&#243;w", "valid": false},
                {"text": "liczb&#281; par zer", "valid": false},
                {"text": "d&#322;ugo&#347;&#263; odpowiedzi impulsowej w pr&#243;bkach", "valid": false},
                {"text": "liczb&#281; par biegun&#243;w", "valid": true},
                {"text": "liczb&#281; zer", "valid": false},
                {"text": "liczb&#281; pasm cz&#281;stotliwo&#347;ci", "valid": false},
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20m%28t_1%2Ct_2%2C...%2Ct_n%29%20%3D%20E%20%5C%5Bx%28t_1%29x%28t_2%29...x%28t_n%29%20%5C%7D%20\"> definiuje:  ",
            "tip": "",
            "answer": [
                {"text": "kumulant n-tego rz&#281;du dowolnego procesu ", "valid": false},
                {"text": "moment n-tego rz&#281;du dowolnego procesu ", "valid": true},
                {"text": "autokowariancj&#281; n-tego rz&#281;du dowolnego procesu ", "valid": false},
                {"text": "dystrybuant&#281; n-tego rz&#281;du dowolnego procesu ", "valid": false},
            ]
        },
        {
            "question": "Dla procesu całkowicie stacjonarnego spełniony jest warunek lub warunki: ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20F%28x_1%2C...%2Cx_n%2Ct_1%2B%5Cepsilon%2C...%2Ct_n%2B%5Cepsilon%29%20%3D%20F%28x_1%2C...%2Cx_n%2Ct_1%2C...%2Ct_n%29%20\"> ", "valid": true},
                {"text": "przesuni&#281;cie punktu obserwacji nie zmienia rozk&#322;ad&#243;w pradopodobienstwa procesu", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20m%28t%29%20%3D%20m%3B%20%5Cquad%20R%28t_1%2Ct_2%29%20%3D%20R%28%5Ctau%29%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20f%28x_1%2C...%2Cx_n%2Ct_1%2B%5Cepsilon%2C...%2Ct_n%2B%5Cepsilon%29%20%3D%20f%28x_1%2C...%2Cx_n%2Ct_1%2C...%2Ct_n%29%20\"> ", "valid": true},
            ]
        },
        {
            "question": "Dla filtrów o skończonej długości odpowiedzi impulsowej ",
            "tip": "",
            "answer": [
                {"text": "stopie&#324; wielomianu w liczniku wynosi zero", "valid": false},
                {"text": "stopie&#324; wielomianu w mianowniku wynosi zero", "valid": true},
                {"text": "stopie&#324; wielomianu w mianowniku wynosi jeden", "valid": false},
                {"text": "stopie&#324; wielomianu w liczniku wynosi jeden", "valid": false},
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20E%20%5C%7B%5Bx%28t%29%20-%20m%28t%29%5D%5E2%20%5C%7D%20\"> definiuje  ",
            "tip": "",
            "answer": [
                {"text": "rozk&#322;ad prawdopodobie&#324;stwa procesu stochastycznego", "valid": false},
                {"text": "wariancj&#281; procesu stochastycznego", "valid": true},
                {"text": "warto&#347;&#263; &#347;redni&#261; procesu stochastycznego", "valid": false},
                {"text": "warto&#347;&#263; &#347;redniokwadratow&#261; procesu stochastycznego", "valid": false},
                {"text": "funkcje autokowariancji procesu stochastycznego", "valid": false},
            ]
        },
        {
            "question": "Są dane cztery przebiegi sinusoidalne. Częstotliwość próbkowania jest <img src=\"http://latex.codecogs.com/png.latex?%20f_s%3D1000\"> Hz, liczba pr&#243;bek <img src=\"http://latex.codecogs.com/png.latex?%20N%3D1000\">, <img src=\"http://latex.codecogs.com/png.latex?%20n%3D0%2C%201%2C%202%2C%20%5Cldots%20%2C%20N-1\">. Wska&#380; te przebiegi, dla kt&#243;rych w wyniku DFT pojawi si&#281; przeciek widma  ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20x_n%3D10%5Ccdot%20%5Csin%20%282%5Ccdot%20%5Cpi%20%5Ccdot%2071.4%5Ccdot%20n%2FN%29\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20x_n%3D2%5Ccdot%20%5Csin%20%282%5Ccdot%20%5Cpi%20%5Ccdot%2061.3%5Ccdot%20n%2FN%29\"> ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20x_n%3D7.4%5Ccdot%20%5Csin%20%282%5Ccdot%20%5Cpi%20%5Ccdot%2022%5Ccdot%20n%2FN%29\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20x_n%3D1.5%5Ccdot%20%5Csin%20%282%5Ccdot%20%5Cpi%20%5Ccdot%2030%5Ccdot%20n%2FN%29\"> ", "valid": false},
            ]
        },
        {
            "question": "Jaka jest częstotliwość <img src=\"http://latex.codecogs.com/png.latex?%20m\">-tego pr&#261;&#380;ka widma obliczonego przy pomocy $N$-punktowej DFT (<img src=\"http://latex.codecogs.com/png.latex?%20f_s\"> -- cz&#281;stotliwo&#347;&#263; pr&#243;bkowania)  ",
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
                {"text": "powsta&#322;a w czasach wielu innych innowacji", "valid": false},
                {"text": "jest nowoczesna", "valid": false},
                {"text": "ka&#380;da kolejna warto&#347;&#263; sygna&#322;u b&#322;&#281;du wnosi nowa informacj&#281;", "valid": true},
                {"text": "ka&#380;da kolejna warto&#347;&#263; sygna&#322;u b&#322;&#281;du jest nieskorelowana z poprzednimi warto&#347;ciami", "valid": true},
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
                {"text": "estymacja realizowana jest w oparciu o jedn&#261; realizacj&#281;", "valid": false},
                {"text": "nie dysponujemy wszystkimi realizacjami", "valid": false},
                {"text": "sko&#324;czony zbi&#243;r pr&#243;bek nie jest reprezentatywny dla ca&#322;ej realizacji", "valid": true},
                {"text": "operuje na pr&#243;bkach a b&#322;&#281;dy pr&#243;bkowania s&#261; nieuniknione", "valid": false},
            ]
        },
        {
            "question": "Estymator zgodny, to taki ",
            "tip": "",
            "answer": [
                {"text": "b&#322;&#261;d &#347;redniokwadratowy jest na zadawalaj&#261;cym poziomie i osi&#261;ga warto&#347;&#263; minimaln&#261;", "valid": false},
                {"text": "kt&#243;rego obci&#261;&#380;enie jest zerowe je&#347;li liczba pr&#243;bek jest coraz wieksza", "valid": false},
                {"text": "dla kt&#243;rego odleg&#322;o&#347;&#263; wynik&#243;w estymacji w sensie statystycznym, maleje ze wzrostem liczby pr&#243;bek N", "valid": true},
                {"text": "dla kt&#243;rego wyniki s&#261; najlepsze z mo&#380;liwych do uzyskania przy danej liczbie pr&#243;bek", "valid": false},
            ]
        },
        {
            "question": "Poziom ufności opisuje ",
            "tip": "",
            "answer": [
                {"text": "ryzyko, &#380;e wynik estymacji znajdzie si&#281; w przedziale ufno&#347;ci", "valid": false},
                {"text": "prawdopodobie&#324;stwo, &#380;e wynik estymacji znajdzie si&#281; poza przedzia&#322;em ufno&#347;ci", "valid": false},
                {"text": "prawdopodobie&#324;stwo, &#380;e wynik estymacji znajdzie si&#281; w przedziale ufno&#347;ci", "valid": true},
                {"text": "pewno&#347;&#263;, &#380;e wynik estymacji znajdzie si&#281; w przedziale ufno&#347;ci", "valid": false},
                {"text": "pewno&#347;&#263;, &#380;e wynik estymacji znajdzie si&#281; poza przedzia&#322;em ufno&#347;ci", "valid": false},
            ]
        },
        {
            "question": "W jakiej metodzie identyfikacji systemu funkcja transmitancji wyznaczana jest z zależności <img src=\"http://latex.codecogs.com/png.latex?%20%20%5Chat%20H%28f%29%20%3D%20%7B%7B%5Chat%20S_%7Byx%7D%28f%29%7D%20%5Cover%20%7B%5Chat%20S_%7Bxx%7D%28f%29%7D%7D%20\">, gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20S%20\"> oznacza widmow&#261; g&#281;sto&#347;&#263; mocy  ",
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
                {"text": "stabilno&#347;ci systemu", "valid": false},
                {"text": "przyczynowo&#347;ci systemu", "valid": true},
                {"text": "nie wprowadzania przez system op&#243;&#378;nienia", "valid": false},
                {"text": "wszechprzepustowo&#347;ci systemu", "valid": false},
            ]
        },
        {
            "question": "Jeżeli sygnał został spróbkowany z częstotliwością <img src=\"http://latex.codecogs.com/png.latex?%20f_s\">, to jego dyskretne widmo w dziedzinie cz&#281;stotliwo&#347;ci jest powielane na osi cz&#281;stotliwo&#347;ci co  ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%202%5Ccdot%20f_s\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%2010%5Ccdot%20f_s\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20f_s%2F2\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20f_s\"> ", "valid": true},
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20m%28t%29%20%3D%20m%20%3D%5Cint_R%20x%20f%28x%29%20dx%20\"> jest s&#322;uszna dla procesu:  ",
            "tip": "",
            "answer": [
                {"text": "cyklostacjonarnego", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20m%20\"> stacjonarnego ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20%5Calpha%20\"> stacjonarnego ", "valid": false},
                {"text": "stacjonarnego ca&#322;kowicie", "valid": true},
                {"text": "s&#322;abo stacjonarnego", "valid": true},
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
            "question": "We wzorze <img src=\"http://latex.codecogs.com/png.latex?%20%20%5Chat%20f%28x%29%20%3D%20%7BN_x%20%5Cover%20%7BN%20w%7D%7D%20\"> wielko&#347;&#263; <img src=\"http://latex.codecogs.com/png.latex?%20%20w%20\"> jest  ",
            "tip": "",
            "answer": [
                {"text": "chwilow&#261; warto&#347;ci&#261; sygna&#322;u", "valid": false},
                {"text": "chwilow&#261; warto&#347;ci&#261; pr&#243;bki", "valid": false},
                {"text": "oknem czasowym", "valid": false},
                {"text": "szeroko&#347;ci&#261; przedzia&#322;u estymacji", "valid": true},
            ]
        },
        {
            "question": "Liczba próbek w algorytmie radix-2 obliczania szybkiej transformacji Fouriera musi być potęgą liczby 2 ponieważ ",
            "tip": "",
            "answer": [
                {"text": "jest to jedyna mo&#380;liwo&#347;&#263; obliczenia transformacji", "valid": false},
                {"text": "pr&#243;bki dzielone s&#261; na nieparzyste i parzyste i liczone s&#261; transformaty z 2 podzbior&#243;w pr&#243;bek", "valid": false},
                {"text": "pr&#243;bki dzielone s&#261; na parzyste i nieparzyste a&#380; do uzyskania podzbior&#243;w 2-punktowych", "valid": true},
                {"text": "za cz&#281;&#347;&#263; pr&#243;bek odpowiada funkcja sinus a za drug&#261; cz&#281;&#347;&#263; funkcja cosinus", "valid": false},
            ]
        },
        {
            "question": "Kaskadowe połączenie dwóch liniowych układów niezmiennych w czasie, o odpowiedziach impulsowych <img src=\"http://latex.codecogs.com/png.latex?%20h_1%20%28n%20%29\"> i <img src=\"http://latex.codecogs.com/png.latex?%20h_2%20%28n%20%29\">, ma &#322;&#261;czn&#261; odpowied&#378; impulsow&#261;  ",
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
                {"text": "ci&#261;g&#322;ym okresowym", "valid": false},
                {"text": "ci&#261;g&#322;ym nieokresowym", "valid": false},
                {"text": "dyskretnym okresowym", "valid": false},
            ]
        },
        {
            "question": "W poleceniu MATLAB postaci b = fir1 (n, [0.2 0.3], 'stop'), n oznacza: ",
            "tip": "",
            "answer": [
                {"text": "liczb&#281; par zer", "valid": false},
                {"text": "liczb&#281; pasm cz&#281;stotliwo&#347;ci", "valid": false},
                {"text": "liczb&#281; zer", "valid": false},
                {"text": "d&#322;ugo&#347;&#263; odpowiedzi impulsowej w pr&#243;bkach", "valid": true},
                {"text": "liczb&#281; par biegun&#243;w", "valid": false},
                {"text": "liczb&#281; biegun&#243;w", "valid": false},
            ]
        },
        {
            "question": "Jeżeli ciągi czasowe <img src=\"http://latex.codecogs.com/png.latex?%20x_%7B1%7D%5Bn%5D\"> i <img src=\"http://latex.codecogs.com/png.latex?%20x_%7B2%7D%5Bn%5D\"> maj&#261; transformaty Fouriera (DFT), odpowiednio, <img src=\"http://latex.codecogs.com/png.latex?%20X_1%28m%29\"> i <img src=\"http://latex.codecogs.com/png.latex?%20X_2%28m%29\">, to dla <img src=\"http://latex.codecogs.com/png.latex?%20x_%7Bsum%7D%5Bn%5D%3Dx_1%5Bn%5D%2Bx_2%5Bn%5D\"> w&#322;a&#347;ciwo&#347;&#263; liniowo&#347;ci DTF mo&#380;na zapisa&#263; jako  ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20X_%7Bsum%7D%28m%29%3DX_1%28m%29%5Cstar%20X_2%28m%29\">  (splot) ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20X_%7Bsum%7D%28m%29%3DX_1%28m%29%20%2B%20X_2%28m%29\">  (suma) ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20X_%7Bsum%7D%28m%29%3DX_1%28m%29%5Ccdot%20X_2%28m%29\">  (iloczyn) ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20X_%7Bsum%7D%28m%29%3DX_1%28m%29%2FX_2%28m%29\">  (iloraz) ", "valid": false},
            ]
        },
        {
            "question": "Filtr IIR (o nieskończonej odpowiedzi impulsowej) ma 2 zera sprzężone: <img src=\"http://latex.codecogs.com/png.latex?%20z%3D%5Cpm%20j%5Ccdot%201\">. Dla jakiej pary sprz&#281;&#380;onych biegun&#243;w taki filtr b&#281;dzie stabilny?  ",
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
                {"text": "warto&#347;ci chwilowej", "valid": false},
                {"text": "amplitudy", "valid": false},
                {"text": "czasu", "valid": false},
                {"text": "cz&#281;stotliwo&#347;ci", "valid": true},
                {"text": "przesuni&#281;cia", "valid": false},
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20s%28t%29%20%3D%20%5Ccos%20%282%20%5Cpi%20%28f%20%2B%20d%28t%29%20%5CDelta%20f%29%20t%29%20\"> jest zapisem matematycznym cyfrowej modulacji  ",
            "tip": "",
            "answer": [
                {"text": "fazy", "valid": false},
                {"text": "z kluczowaniem cz&#281;stotliwo&#347;ci", "valid": true},
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
                {"text": "odpowied&#378; systemu na impuls Gibs'a", "valid": false},
                {"text": "odpowied&#378; systemu na impuls Kronecker'a", "valid": true},
                {"text": "odpowied&#378; systemu na sygna&#322; sinusoidalny o zadanej cz&#281;stotliwo&#347;ci", "valid": false},
                {"text": "odpowied&#378; systemu na funkcj&#281; grzebieniow&#261;", "valid": false},
                {"text": "odpowied&#378; systemu na skok jednostkowy", "valid": false},
                {"text": "odpowied&#378; systemu na impuls Dirac'a", "valid": true},
            ]
        },
        {
            "question": "Proces jest całkowicie określony, jeśli: ",
            "tip": "",
            "answer": [
                {"text": "znane s&#261; dystrubuanty dowolnego rz&#281;du", "valid": true},
                {"text": "znane s&#261; statystyki niesko&#324;czonego rz&#281;du", "valid": false},
                {"text": "znane s&#261; statystyki dowolnego rz&#281;du", "valid": true},
                {"text": "znane s&#261; rozk&#322;ady prawdopodobie&#324;stwa dowolnego rz&#281;du", "valid": true},
            ]
        },
        {
            "question": "Wrażliwość struktury filtru cyfrowego opisuje ",
            "tip": "",
            "answer": [
                {"text": "wra&#380;liwo&#347;&#263; struktury na b&#322;&#281;dy kwantowania przetwarzanych sygna&#322;&#243;w", "valid": false},
                {"text": "wra&#380;liwo&#347;&#263; struktury na przeprojektowywanie filtru", "valid": false},
                {"text": "wp&#322;yw b&#322;&#281;d&#243;w zaokr&#261;gle&#324; na jako&#347;&#263; filtracji", "valid": true},
                {"text": "wra&#380;liwo&#347;&#263; struktury na b&#322;&#281;dy pope&#322;nione na etapie projektowania", "valid": false},
            ]
        },
        {
            "question": "W definicji <img src=\"http://latex.codecogs.com/png.latex?%20%20m%28t%29%20%3D%20E%20%5C%7B%20x%28t%29%20%5C%7D%20\"> symbol <img src=\"http://latex.codecogs.com/png.latex?%20%20E%20\"> oznacza:  ",
            "tip": "",
            "answer": [
                {"text": "warto&#347;&#263; oczekiwan&#261; ", "valid": true},
                {"text": "prawdopodobie&#324;stwo", "valid": false},
                {"text": "&#347;redni&#261; arytmetyczn&#261;", "valid": false},
                {"text": "&#347;redni&#261; geometryczn&#261;", "valid": false},
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20P%20%5C%7B%20x%28t_1%29%20%5Cleq%20x_1%2C%20x%28t_2%29%20%5Cleq%20x_2%20%5C%7D%20\"> jest definicj&#261;:  ",
            "tip": "",
            "answer": [
                {"text": "g&#281;sto&#347;ci prawdopodobie&#324;stwa 2. rz&#281;du", "valid": false},
                {"text": "rozk&#322;adu prawdopodobie&#324;stwa 2. rz&#281;du", "valid": false},
                {"text": "dystrybuanty 1. rz&#281;du", "valid": false},
                {"text": "rozk&#322;adu prawdopodobie&#324;stwa 1. rz&#281;du", "valid": false},
                {"text": "g&#281;sto&#347;ci prawdopodobie&#324;stwa 1. rz&#281;du", "valid": false},
                {"text": "dystrybuanty 2. rz&#281;du", "valid": true},
            ]
        },
        {
            "question": "Szybkość symbolowa modulacji (transmisji) zdefiniowana jest wzorem ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> jest czasem trwania symbolu ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20T%20%5Cover%20m%20\"> gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> jest czasem trwania symbolu a <img src=\"http://latex.codecogs.com/png.latex?%20%20m%20\"> jest liczb&#261; bit&#243;w zajmowanych przez symbol ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%201%20%5Cover%20T%20\"> gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> jest czasem trwania symbolu ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20m%20%5Cover%20T%20\"> gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> jest czasem trwania symbolu a <img src=\"http://latex.codecogs.com/png.latex?%20%20m%20\"> jest liczb&#261; bit&#243;w przypadaj&#261;cych na symbol ", "valid": false},
            ]
        },
        {
            "question": "Wartość funkcji autokowariancji w zerze określa jednocześnie: ",
            "tip": "",
            "answer": [
                {"text": "wariancj&#281; procesu", "valid": true},
                {"text": "warto&#347;&#263; &#347;redniokwadratow&#261; procesu", "valid": false},
                {"text": "energi&#281; procesu", "valid": false},
                {"text": "moc procesu", "valid": false},
            ]
        },
        {
            "question": "Transformacja dwuliniowa pozwala na przeliczenie ",
            "tip": "",
            "answer": [
                {"text": "po&#322;o&#380;enia zer i biegun&#243;w filtru dolnoprzepustowego na dowolny inny", "valid": false},
                {"text": "po&#322;o&#380;enia zer i biegun&#243;w z p&#322;aszczyzny \"s\" na p&#322;aszczyzn&#281; \"z\"", "valid": true},
                {"text": "po&#322;o&#380;enia zer i biegun&#243;w z p&#322;aszczyzny \"z\" na p&#322;aszczyzn&#281; \"s\"", "valid": false},
                {"text": "po&#322;o&#380;enia zer i biegun&#243;w filtru pasmowoprzepustowego na filtr pasmowozaporowy", "valid": false},
            ]
        },
        {
            "question": "Ergodyczność procesu pozwala na ",
            "tip": "",
            "answer": [
                {"text": "estymacj&#281; statystyk na podstawie sko&#324;czonego zbioru pr&#243;bek jednej z realizacji", "valid": true},
                {"text": "zast&#261;pienie u&#347;redniania po czasie u&#347;rednianiem po zbiorze", "valid": false},
                {"text": "wyznaczenie statystyk procesu na podstawie jednej realizacji ", "valid": true},
                {"text": "wyznaczenie statystyk procesu z przekroju po czasie", "valid": false},
                {"text": "zast&#261;pienie u&#347;redniania po zbiorze u&#347;rednianiem po czasie", "valid": true},
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
                {"text": "pojedyncz&#261; funkcj&#281; b&#281;d&#261;c&#261; wynikiem losowania", "valid": true},
                {"text": "opisanie procesu za pomoc&#261; statystyk", "valid": false},
                {"text": "przekr&#243;j procesu dla ustalonego wyniku losowania", "valid": false},
                {"text": "zbiorem wszystkich funkcji, kt&#243;re sk&#322;adaj&#261; si&#281; na proces", "valid": false},
            ]
        },
        {
            "question": "Od czego zależy liczba poziomów kwantyzacji przy przetwarzaniu analogowo-cyfrowym ? ",
            "tip": "",
            "answer": [
                {"text": "od liczby pr&#243;bek sygna&#322;u", "valid": false},
                {"text": "od szumu kwantyzacji", "valid": false},
                {"text": "od d&#322;ugo&#347;ci s&#322;owa binarnego przetwornika", "valid": true},
                {"text": "od cz&#281;stotliwo&#347;ci pr&#243;bkowania", "valid": false},
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
                {"text": "o niesko&#324;czonej d&#322;ugo&#347;ci impulsowej", "valid": true},
                {"text": "kratowych", "valid": false},
                {"text": "eliptycznych", "valid": true},
                {"text": "o sko&#324;czonej d&#322;ugo&#347;ci odpowiedzi impulsowej", "valid": false},
                {"text": "na podstawie filtr&#243;w analogowych", "valid": true},
                {"text": "Butterworth'a", "valid": true},
            ]
        },
        {
            "question": "W definicji <img src=\"http://latex.codecogs.com/png.latex?%20%20F%28x%2Ct%29%20%3D%20P%20%5C%7Bx%28t%29%20%5Cleq%20x%5C%7D%20\">, <img src=\"http://latex.codecogs.com/png.latex?%20%20P%20\"> oznacza:  ",
            "tip": "",
            "answer": [
                {"text": "pochodn&#261;", "valid": false},
                {"text": "g&#281;sto&#347;&#263; prawdopodobie&#324;stwa", "valid": false},
                {"text": "funkcj&#281;", "valid": false},
                {"text": "prawdopodobie&#324;stwo", "valid": true},
            ]
        },
        {
            "question": "Równoległe połączenie dwóch liniowych układów niezmiennych w czasie, o odpowiedziach impulsowych <img src=\"http://latex.codecogs.com/png.latex?%20h_1%20%28n%20%29%20\"> i <img src=\"http://latex.codecogs.com/png.latex?%20h_2%20%28n%20%29\">, ma &#322;&#261;czn&#261; odpowied&#378; impulsow&#261;  ",
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
                {"text": "pochodna dystrybuanty 1-go rz&#281;du", "valid": false},
                {"text": "druga pochodna cz&#261;stkowa dystrybuanty 1-go rz&#281;du", "valid": false},
                {"text": "pochodna cz&#261;stkowa dystrybuanty 2-go rz&#281;du", "valid": false},
                {"text": "druga pochodna cz&#261;stkowa dystrybuanty 2-go rz&#281;du", "valid": true},
            ]
        },
        {
            "question": "Struktury filtrów cyfrowych różnią się ",
            "tip": "",
            "answer": [
                {"text": "liczb&#261; zer i biegun&#243;w", "valid": false},
                {"text": "liczba element&#243;w mno&#380;&#261;cych", "valid": true},
                {"text": "wra&#380;liwo&#347;ci&#261; na b&#322;&#281;dy zaokr&#261;gle&#324; wsp&#243;&#322;czynnik&#243;w filtru", "valid": true},
                {"text": "liczba element&#243;w op&#243;&#378;niaj&#261;cych", "valid": true},
                {"text": "liczb&#261; element&#243;w sumuj&#261;cych", "valid": true},
                {"text": "wra&#380;liwo&#347;ci&#261; na b&#322;&#281;dy kwantowania ", "valid": false},
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
                {"text": "jego odpowied&#378; zale&#380;y od aktualnej warto&#347;ci pobudzenia", "valid": false},
                {"text": "jego odpowied&#378; zale&#380;y od poprzednich w czasie warto&#347;ci pobudzenia", "valid": false},
                {"text": "jego odpowied&#378; jest minimalnofazowa", "valid": false},
                {"text": "jego odpowied&#378; zale&#380;y od aktualnej i poprzednich w czasie warto&#347;ci pobudzenia", "valid": true},
            ]
        },
        {
            "question": "Poziomą osią wykresu histogramu jest oś: ",
            "tip": "",
            "answer": [
                {"text": "amplitudy", "valid": false},
                {"text": "czasu", "valid": false},
                {"text": "przesuni&#281;cia", "valid": false},
                {"text": "cz&#281;stotliwo&#347;ci", "valid": false},
                {"text": "warto&#347;ci chwilowej", "valid": true},
            ]
        },
        {
            "question": "Filtracja innowacyjna nazywana jest czasem liniową predykcją, gdyż: ",
            "tip": "",
            "answer": [
                {"text": "jest to proces przewidywania (predykcji) liniowego sygna&#322;u b&#322;&#281;du", "valid": false},
                {"text": "jest to proces przewidywania (predykcji) sygna&#322;u b&#322;&#281;du", "valid": false},
                {"text": "przesz&#322;e pr&#243;bki sygna&#322;u przekszta&#322;cane s&#261; na liniowy sygna&#322; wyj&#347;ciowy", "valid": false},
                {"text": "przesz&#322;e pr&#243;bki sygna&#322;u przekszta&#322;cane s&#261; operatorem liniowym", "valid": true},
                {"text": "estymator bie&#380;&#261;cej pr&#243;bki wyznaczany jest przez liniow&#261; kombinacj&#281; pr&#243;bek przesz&#322;ych sygna&#322;u", "valid": true},
            ]
        },
        {
            "question": "Uklad Youle'a-Walkera nazywamy inaczej ukladem ",
            "tip": "",
            "answer": [
                {"text": "normalnym r&#243;wna&#324;", "valid": true},
                {"text": "uzupe&#322;nionym r&#243;wna&#324;", "valid": false},
                {"text": "nieodwracalnym r&#243;wna&#324;", "valid": false},
                {"text": "pe&#322;nym r&#243;wna&#324;", "valid": false},
            ]
        },
        {
            "question": "Pojęcie cyklostacjonarności dotyczy: ",
            "tip": "",
            "answer": [
                {"text": "sygna&#322;&#243;w medycznych", "valid": false},
                {"text": "sygna&#322;&#243;w ergodycznych", "valid": false},
                {"text": "dowolnych sygna&#322;&#243;w telekomunikacyjnych", "valid": false},
                {"text": "sygna&#322;&#243;w akustycznych", "valid": false},
                {"text": "sygna&#322;&#243;w telekomunikacji cyfrowej", "valid": true},
                {"text": "dowolnych sygna&#322;&#243;w wolnozmiennych", "valid": false},
            ]
        },
        {
            "question": "Zmienną niezależną widma amplitudowego jest: ",
            "tip": "",
            "answer": [
                {"text": "warto&#347;&#263; chwilowa", "valid": false},
                {"text": "cz&#281;stotliwo&#347;&#263;", "valid": true},
                {"text": "przesuni&#281;cie", "valid": false},
                {"text": "czas", "valid": false},
                {"text": "amplituda", "valid": false},
            ]
        },
        {
            "question": "Decymacja to proces ",
            "tip": "",
            "answer": [
                {"text": "zmniejszania warto&#347;ci pr&#243;bek", "valid": false},
                {"text": "zwi&#281;kszania warto&#347;ci pr&#243;bek", "valid": false},
                {"text": "zmniejszania cz&#281;stotliwo&#347;ci pr&#243;bkowania", "valid": true},
                {"text": "zwi&#281;kszania cz&#281;stotliwo&#347;ci pr&#243;bkowania", "valid": false},
            ]
        },
        {
            "question": "Szybkość bitowa modulacji (transmisji) zdefiniowana jest zależnością ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> jest czasem trwania symbolu ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20m%20%5Cover%20T%20\"> gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> jest czasem trwania symbolu a <img src=\"http://latex.codecogs.com/png.latex?%20%20m%20\"> jest liczb&#261; bit&#243;w zajmowanych przez symbol ", "valid": true},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%201%20%5Cover%20T%20\"> gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> jest czasem trwania symbolu  ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20T%20%5Cover%20m%20\"> gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> jest czasem trwania symbolu a <img src=\"http://latex.codecogs.com/png.latex?%20%20m%20\"> jest liczb&#261; bit&#243;w zajmowanych przez symbol ", "valid": false},
            ]
        },
        {
            "question": "Jaka jest rozdzielczość widma (odległość pomiędzy dwoma sąsiednimi prążkami widma) (<img src=\"http://latex.codecogs.com/png.latex?%20N\"> -- liczba pr&#243;bek sygna&#322;u poddawanego DFT, <img src=\"http://latex.codecogs.com/png.latex?%20f_s\"> -- cz&#281;stotliwo&#347;&#263; pr&#243;bkowania)  ",
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
                {"text": "przesuni&#281;cie", "valid": false},
                {"text": "cz&#281;stotliwo&#347;&#263;", "valid": true},
                {"text": "czas", "valid": false},
                {"text": "amplituda", "valid": false},
                {"text": "warto&#347;&#263; chwilowa", "valid": false},
            ]
        },
        {
            "question": "Poziomą osią wykresu widma amplitudowego jest oś: ",
            "tip": "",
            "answer": [
                {"text": "czasu", "valid": false},
                {"text": "warto&#347;ci chwilowej", "valid": false},
                {"text": "amplitudy", "valid": false},
                {"text": "przesuni&#281;cia", "valid": false},
                {"text": "cz&#281;stotliwo&#347;ci", "valid": true},
            ]
        },
        {
            "question": "W jakiej metodzie identyfikacji systemu moduł funkcji transmitancji wyznaczany jest z zależności <img src=\"http://latex.codecogs.com/png.latex?%20%20%7C%5Chat%20H%28f%29%7C%20%3D%20%5Csqrt%20%7B%7B%7B%5Chat%20S_%7Byy%7D%28f%29%7D%20%5Cover%20%7B%5Chat%20S_%7Bxx%7D%28f%29%7D%7D%7D%20\">, gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20S%20\"> oznacza widmow&#261; g&#281;sto&#347;&#263; mocy  ",
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
                {"text": "posiadaj&#261; bieguny", "valid": true},
                {"text": "nie posiadaj&#261; zer", "valid": false},
                {"text": "mog&#261; by&#263; niestabilne", "valid": true},
                {"text": "nie posiadaj&#261; biegun&#243;w", "valid": false},
                {"text": "s&#261; zawsze stabilne", "valid": false},
            ]
        },
        {
            "question": "Jeśli <img src=\"http://latex.codecogs.com/png.latex?%20%20t%20\"> oznacza czas dyskretny, to definicja transformaty Z ma posta&#263;  ",
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
                {"text": "prawdopodobie&#324;stwa zdarze&#324;", "valid": false},
                {"text": "dystrybuanty", "valid": false},
            ]
        },
        {
            "question": "Modulacje cyfrowe różnią się od modulacji analogowych tym, że ",
            "tip": "",
            "answer": [
                {"text": "przez kana&#322; telekomunikacyjny przesy&#322;any jest sygna&#322; cyfrowy", "valid": false},
                {"text": "przez kana&#322; telekomunikacyjny przesy&#322;any jest  sygna&#322; dyskretny", "valid": false},
                {"text": "sygna&#322; moduluj&#261;cy jest sygna&#322;em cyfrowym", "valid": true},
                {"text": "sygna&#322; modulowany jest sygna&#322;em cyfrowym", "valid": false},
                {"text": "sygna&#322; przesy&#322;any jest przez kana&#322; cyfrowy", "valid": false},
            ]
        },
        {
            "question": "Modulacja QAM charakteryzuje się ",
            "tip": "",
            "answer": [
                {"text": "jednoczesnym kluczowaniem amplitudy i cz&#281;stotliwo&#347;ci", "valid": false},
                {"text": "jednoczesnym kluczowaniem cz&#261;stotliwo&#347;ci i fazy", "valid": false},
                {"text": "jednoczesnym kluczowaniem amplitudy i fazy", "valid": true},
                {"text": "kluczowaniem fazy", "valid": false},
                {"text": "kluczowaniem amplitudy", "valid": false},
                {"text": "kluczowaniem cz&#261;stotliwo&#347;ci", "valid": false},
            ]
        },
        {
            "question": "Wariancja estymatora opisuje ",
            "tip": "",
            "answer": [
                {"text": "rozrzut wynik&#243;w wok&#243;&#322; wariancji", "valid": false},
                {"text": "rozrzut wynik&#243;w wok&#243;&#322; warto&#347;ci dok&#322;adnej estymowanej wielko&#347;ci", "valid": false},
                {"text": "rozrzut wynik&#243;w wok&#243;&#322; warto&#347;ci &#347;redniej estymatora", "valid": true},
                {"text": "systematyczn&#261; niezgodno&#347;&#263; uzyskiwanych wynik&#243;w z dok&#322;adn&#261; estymowan&#261; warto&#347;ci&#261;", "valid": false},
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
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20%20S%28f%29%20\"> jest dodatnio okre&#347;lona ", "valid": false},
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
                {"text": "parzysto&#347;&#263; funkcji cosinus", "valid": true},
                {"text": "okresowo&#347;&#263;", "valid": true},
                {"text": "rzeczywisto&#347;&#263; funkcji bazowych", "valid": false},
                {"text": "nieparzysto&#347;&#263; funkcji sinus", "valid": true},
                {"text": "ograniczono&#347;&#263; funkcji bazowych w czasie", "valid": false},
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
                {"text": "zmniejszy&#263; przeciek widma", "valid": true},
                {"text": "zwi&#281;kszy&#263; cz&#281;stotliwo&#347;&#263; pr&#243;bkowania", "valid": false},
                {"text": "usun&#261;&#263; szum zak&#322;&#243;caj&#261;cy", "valid": false},
                {"text": "usun&#261;&#263; sk&#322;adow&#261; sta&#322;&#261;", "valid": false},
            ]
        },
        {
            "question": "Prawdziwe jest stwierdzenie: ",
            "tip": "",
            "answer": [
                {"text": "odpowied&#378; impulsowa jest transformat&#261; Fouriera z funkcji transmitancji", "valid": false},
                {"text": "odpowied&#378; impulsowa jest odwrotn&#261; transformat&#261; Fouriera funkcji transmitancji", "valid": true},
                {"text": "funkcja transmitancji jest odwrotn&#261; transformat&#261; Fouriera z odpowiedzi impulsowej", "valid": false},
                {"text": "funkcja transmitancji jest transformata Fouriera z odpowiedzi impulsowej", "valid": true},
            ]
        },
        {
            "question": "W definicji procesu stochastycznego wynikowi losowania przypisuje się: ",
            "tip": "",
            "answer": [
                {"text": "liczb&#281; rzeczywist&#261; lub zespolon&#261;", "valid": false},
                {"text": "rzeczywist&#261; lub zespolon&#261; funkcj&#281; czasu", "valid": true},
                {"text": "prawdopodobie&#324;stwo", "valid": false},
                {"text": "rozk&#322;ad prawdopodobie&#324;stwa", "valid": false},
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
                {"text": "przyjmowany jest model sygna&#322;u", "valid": true},
                {"text": "widmowa g&#281;sto&#347;&#263; mocy zale&#380;y od parametr&#243;w estymacji", "valid": false},
                {"text": "zak&#322;adana jest warto&#347;&#263; pewnych niezmiennik&#243;w widmowej g&#281;sto&#347;ci mocy", "valid": false},
                {"text": "jeste&#347;my w stanie wyestymowa&#263; jedynie pewne parametry widmowej g&#281;sto&#347;ci mocy", "valid": false},
            ]
        },
        {
            "question": "W jakiej metodzie identyfikacji systemu moduł funkcji transmitancji wyznaczany jest z zależności <img src=\"http://latex.codecogs.com/png.latex?%20%20%7C%5Chat%20H%28f%29%7C%20%3D%20%7B%7B%5Chat%20A_y%28f%29%7D%20%5Cover%20%7B%5Chat%20A_x%28f%29%7D%7D%20\">, gdzie <img src=\"http://latex.codecogs.com/png.latex?%20%20A_x%20\"> i <img src=\"http://latex.codecogs.com/png.latex?%20%20A_y%20\"> s&#261; amplitudami sygna&#322;&#243;w wej&#347;ciowego i wyj&#347;ciowego  ",
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
                {"text": "wyk&#322;adniczy", "valid": false},
                {"text": "Poissona", "valid": false},
                {"text": "r&#243;wnomierny", "valid": true},
            ]
        },
        {
            "question": "Warunek odnośnie minimalnego tłumienia filtru cyfrowego dotyczy pasma ",
            "tip": "",
            "answer": [
                {"text": "przepustowego", "valid": false},
                {"text": "minimalnego", "valid": false},
                {"text": "zaporowego", "valid": true},
                {"text": "przej&#347;ciowego", "valid": false},
            ]
        },
        {
            "question": "Zmienną niezależną funkcji autokorelacji jest: ",
            "tip": "",
            "answer": [
                {"text": "czas", "valid": false},
                {"text": "cz&#281;stotliwo&#347;&#263;", "valid": false},
                {"text": "amplituda", "valid": false},
                {"text": "przesuni&#281;cie", "valid": true},
                {"text": "warto&#347;&#263; chwilowa", "valid": false},
            ]
        },
        {
            "question": "Proces stochastyczny od zmiennej losowej różni się: ",
            "tip": "",
            "answer": [
                {"text": "posiadanie jeszcze jednej zmiennej losowej jaka zwykle jest czas", "valid": false},
                {"text": "posiadaniem jeszcze jednej zmiennej niezale&#380;nej jak&#261; zwykle jest czas", "valid": true},
                {"text": "dwoma zmiennymi niezale&#380;nymi", "valid": true},
                {"text": "kszta&#322;tem rozk&#322;adu prawdopodobie&#324;stwa", "valid": false},
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
                {"text": "warto&#347;&#263; &#347;redni&#261; procesu stochastycznego", "valid": true},
                {"text": "rozk&#322;ad prawdopodobie&#324;stwa procesu stochastycznego", "valid": false},
                {"text": "wariancj&#281; procesu stochastycznego", "valid": false},
                {"text": "warto&#347;&#263; &#347;redniokwadratow&#261; procesu stochastycznego", "valid": false},
                {"text": "funkcj&#281; autokorelacji procesu stochastycznego", "valid": false},
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
                {"text": "warto&#347;&#263; chwilowa", "valid": false},
                {"text": "amplituda", "valid": false},
                {"text": "cz&#281;stotliwo&#347;&#263;", "valid": false},
                {"text": "czas", "valid": true},
                {"text": "przesuni&#281;cie", "valid": false},
            ]
        },
        {
            "question": "Definicja <img src=\"http://latex.codecogs.com/png.latex?%20F%28x%2Ct%29%20%3D%20P%5C%7Bx%28t%29%20%26amp%3Blt%3B%20x%5C%7D\"> jest:  ",
            "tip": "",
            "answer": [
                {"text": "definicj&#261; dystrybuanty I-go rz&#281;du", "valid": true},
                {"text": "definicj&#281; rozk&#322;adu prawdopodobie&#324;stwa II-go rz&#281;du", "valid": false},
                {"text": "definicj&#261; rozk&#322;adu prawdopodobie&#324;stwa I-go rz&#281;du", "valid": false},
                {"text": "definicj&#261; dystrybuanty II-go rz&#281;du", "valid": false},
            ]
        },
        {
            "question": "Widmo sygnału dyskretnego okresowego jest widmem ",
            "tip": "",
            "answer": [
                {"text": "ci&#261;g&#322;ym nieokresowym", "valid": false},
                {"text": "dyskretnym okresowym", "valid": true},
                {"text": "ci&#261;g&#322;ym okresowym", "valid": false},
                {"text": "dyskretnym nieokresowym", "valid": false},
            ]
        },
        {
            "question": "Proces stochastyczny musi: ",
            "tip": "",
            "answer": [
                {"text": "musi zawiera&#263; wi&#281;cej ni&#380; jedn&#261; realizacj&#281;", "valid": true},
                {"text": "zawiera&#263; co najmniej jedn&#261; realizacj&#281;", "valid": false},
                {"text": "zawiara&#263; conajmniej 2 realizacje", "valid": true},
                {"text": "zawiara&#263; niesko&#324;czenie wiele realizacji", "valid": false},
            ]
        },
        {
            "question": "Filtry cyfrowe Butterworth'a charakteryzują się ",
            "tip": "",
            "answer": [
                {"text": "minimalnym t&#322;umieniem w pa&#347;mie przepustowym", "valid": false},
                {"text": "maksymalnym t&#322;umieniem w pa&#347;mie zaporowym", "valid": false},
                {"text": "minimaln&#261; szeroko&#347;ci&#261; pasma przej&#347;ciowego", "valid": false},
                {"text": "maksymalnie p&#322;askim modu&#322;em funkcji transmitancji", "valid": true},
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20E%20%5C%7Bx%28t_1%29%20x%28t_2%29%20%5C%7D%20\"> definiuje:  ",
            "tip": "",
            "answer": [
                {"text": "funkcj&#281; autokowariancji dowolnego procesu ", "valid": false},
                {"text": "funkcj&#281; autokorelacji dowolnego procesu ", "valid": true},
                {"text": "funkcj&#281; autokowariancji procesu stacjonarnego ", "valid": false},
                {"text": "funkcj&#281; autokorelacji procesu stacjonarnego", "valid": false},
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
                {"text": "odtwarzanie no&#347;nej", "valid": true},
                {"text": "dekompresja", "valid": true},
                {"text": "filtracja odszumiaj&#261;ca", "valid": true},
                {"text": "rozpakowanie blok&#243;w i segment&#243;w", "valid": true},
            ]
        },
        {
            "question": "Widmo sygnału dyskretnego nieokresowego jest widmem ",
            "tip": "",
            "answer": [
                {"text": "ci&#261;g&#322;ym nieokresowym", "valid": false},
                {"text": "ci&#261;g&#322;ym okresowym", "valid": true},
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
                {"text": "podobie&#324;stwo grup realizacji procesu ", "valid": false},
                {"text": "cykliczno&#347;&#263; zmian g&#281;sto&#347;ci prawdopodobie&#324;stwa", "valid": false},
                {"text": "s&#322;ab&#261; stacjonarno&#347;&#263; w po&#322;&#261;czeniu ze sko&#324;czonym czasem trwania procesu", "valid": false},
                {"text": "niewielkie zmiany w sygnale na kr&#243;tkim odcinku czasu", "valid": true},
            ]
        },
        {
            "question": "Metody optymalizacyjne projektowania filtrów cyfrowych polegają na ",
            "tip": "",
            "answer": [
                {"text": "wybraniu takiej struktury filtracji, aby koszt oblicze&#324; by&#322; jak najmniejszy", "valid": false},
                {"text": "znalezieniu takiej konfiguracji zer i biegun&#243;w, aby ich wzajemna odleg&#322;o&#347;&#263; by&#322;a jak najmniejsza", "valid": false},
                {"text": "poszukiwaniu takich warto&#347;ci wp&#243;&#322;czynnik&#243;w filtru aby szeroko&#347;&#263; pasma przej&#347;ciowego by&#322;a jak najmniejsza", "valid": false},
                {"text": "poszukiwaniu takich warto&#347;ci wsp&#243;&#322;czynnik&#243;w aby osi&#261;gn&#261;&#263; minimum funkcji koszt&#243;w", "valid": true},
            ]
        },
        {
            "question": "Filtr minimalnofazowy posiada ",
            "tip": "",
            "answer": [
                {"text": "minimalne z mo&#380;liwych zafalowania modu&#322;u transmitancji", "valid": false},
                {"text": "minimaln&#261; warto&#347;&#263; sumy wsp&#243;&#322;czynnik&#243;w odpowiedzi impulsowej", "valid": false},
                {"text": "maksymalnie p&#322;aski modu&#322; transmitancji", "valid": false},
                {"text": "wszystkie zera ulokowane wewn&#261;trz okr&#281;gu jednostkowego", "valid": true},
                {"text": "wszystkie zera ulokowane na zewn&#261;trz okr&#281;gu jednostkowego", "valid": false},
            ]
        },
        {
            "question": "Procesy stochastyczne stacjonarne, dla których funkcja korelacji wzajemnej jest równa zero dla dowolnego opóźnienia nazywamy procesami: ",
            "tip": "",
            "answer": [
                {"text": "ortogonalnymi", "valid": true},
                {"text": "zerowymi", "valid": false},
                {"text": "niepowi&#261;zanymi", "valid": false},
                {"text": "liniowo-niezale&#380;nymi", "valid": false},
                {"text": "statystycznie niezale&#380;nymi", "valid": false},
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
            "question": "Jeżeli w próbkowanym sygnale maksymalna częstotliwość ma wartość <img src=\"http://latex.codecogs.com/png.latex?%20f_%7Bmax%7D\">, to twierdzenie o pr&#243;bkowaniu m&#243;wi, &#380;e minimalna cz&#281;stotliwo&#347;&#263; poprawnego pr&#243;bkowania musi by&#263;:  ",
            "tip": "",
            "answer": [
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20f_s%5Cge%2010%5Ccdot%20f_%7Bmax%7D\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20f_s%3Df_%7Bmax%7D%20\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20f_s%5Cge%20f_%7Bmax%7D\"> ", "valid": false},
                {"text": "<img src=\"http://latex.codecogs.com/png.latex?%20f_s%5Cge%202%5Ccdot%20f_%7Bmax%7D\"> ", "valid": true},
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20d%28t%29%20%3D%20%5Csum_%7Bn%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20a_n%20%5Chspace%7B2pt%7D%20g%28t-nT%29%20\"> opisuje sygna&#322; telekomunikacyjny  ",
            "tip": "",
            "answer": [
                {"text": "dyskretny na cz&#281;stotliwo&#347;ci po&#347;redniej", "valid": false},
                {"text": "analogowy na cz&#281;stotliwo&#347;ci no&#347;nej", "valid": false},
                {"text": "analogowy na cz&#281;stotliwo&#347;ci po&#347;redniej", "valid": false},
                {"text": "dyskretny na cz&#281;stotliwo&#347;ci no&#347;nej", "valid": false},
                {"text": "analogowy w pa&#347;mie podstawowym", "valid": true},
                {"text": "dyskretny w pa&#347;mie podstawowym", "valid": false},
            ]
        },
        {
            "question": "W ogólnym przypadku, zmienną niezależną dystrybuanty I-rzędu procesu stochastycznego jest: ",
            "tip": "",
            "answer": [
                {"text": "prawdopodobie&#324;stwo", "valid": false},
                {"text": "czas", "valid": true},
                {"text": "sygna&#322;", "valid": false},
                {"text": "wynik losowania", "valid": false},
                {"text": "warto&#347;&#263; chwilowa sygna&#322;u", "valid": true},
            ]
        },
        {
            "question": "Widmo sygnału ciągłego nieokresowego jest widmem ",
            "tip": "",
            "answer": [
                {"text": "dyskretnym okresowym", "valid": false},
                {"text": "dyskretnym nieokresowym", "valid": false},
                {"text": "ci&#261;g&#322;ym nieokresowym", "valid": true},
                {"text": "ci&#261;g&#322;ym okresowym", "valid": false},
            ]
        },
        {
            "question": "Założenie o ergodyczności pozwala na: ",
            "tip": "",
            "answer": [
                {"text": "skorzystanie z poj&#281;cia lokalnej stacjonarno&#347;ci", "valid": false},
                {"text": "zast&#261;pienie u&#347;redniania po zbiorze u&#347;rednianiem po czasie przy wyznaczaniu statystyk procesu ", "valid": true},
                {"text": "wyznaczenie estymator&#243;w statystyk procesu na podstawie jednej realizacji", "valid": true},
                {"text": "wyznaczenie statystyk procesu stacjonarnego", "valid": false},
                {"text": "wyznaczenie statystyk procesu dysponuj&#261;c jedynie jedn&#261; realizacj&#261;", "valid": true},
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
                {"text": "na ile &#347;rednio wynik estymacji r&#243;&#380;ni&#322; si&#281; b&#281;dzie od dok&#322;adnej warto&#347;ci", "valid": true},
                {"text": "na ile dany wynik b&#281;dzie si&#281; r&#243;&#380;ni&#322; od poprzedniego wyniku", "valid": false},
                {"text": "na ile dany wynik b&#281;dzie si&#281; r&#243;&#380;ni&#322; od warto&#347;ci dok&#322;adnej", "valid": false},
                {"text": "rozrzut wynik&#243;w wok&#243;&#322; warto&#347;ci &#347;redniej wynik&#243;w estymacji", "valid": false},
            ]
        },
        {
            "question": "Współczynniki filtru FIR (o skończonej odpowiedzi impulsowej) to ",
            "tip": "",
            "answer": [
                {"text": "warto&#347;ci pr&#261;&#380;k&#243;w widma sygna&#322;u wej&#347;ciowego filtru", "valid": false},
                {"text": "ci&#261;g warto&#347;ci odpowiedzi impulsowej filtru", "valid": true},
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
                {"text": "widmowa g&#281;sto&#347;&#263; mocy jest krzyw&#261; Gaussa", "valid": false},
                {"text": "autokorelacja jest krzyw&#261; Gaussa", "valid": false},
                {"text": "rozk&#322;ad prawdopodobie&#324;stwa jest krzyw&#261; Gaussa", "valid": true},
                {"text": "dystrybuanta jest krzyw&#261; Gaussa", "valid": false},
            ]
        },
        {
            "question": "Estymacja to ",
            "tip": "",
            "answer": [
                {"text": "oszacowanie statystyki b&#261;d&#378; parametru procesu stochastycznego na podstawie sko&#324;czonego zbioru pr&#243;bek jednej z realizacji", "valid": true},
                {"text": "oszacowanie statystyki lub parametru procesu stochastycznego na podstawie sko&#324;czonego zbioru pr&#243;bek kilku realizacji", "valid": false},
                {"text": "oszacowanie statystyki b&#261;d&#378; parametru procesu stochastycznego na podstawie jednej realizacji", "valid": false},
                {"text": "odtworzenie sygna&#322;u analogowego na podstawie pr&#243;bek sygna&#322;u cyfrowego", "valid": false},
                {"text": "oszacowanie warto&#347;ci sygna&#322;u analogowego na podstawie pr&#243;bek sygna&#322;u", "valid": false},
                {"text": "oszacowanie przysz&#322;ej warto&#347;ci procesu stochastycznego na podstawie zbioru pr&#243;bek", "valid": false},
            ]
        },
        {
            "question": "W zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20d%28t%29%20%3D%20%5Csum_%7Bn%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20a_n%20%5Chspace%7B2pt%7D%20g%28t-nT%29%20\"> opisuj&#261;cej sygna&#322; telekomunikacyjny, <img src=\"http://latex.codecogs.com/png.latex?%20%20g%20\"> jest  ",
            "tip": "",
            "answer": [
                {"text": "filtrem nadawczym", "valid": true},
                {"text": "oknem czasowym kszta&#322;tuj&#261;cym widmo sygna&#322;u", "valid": true},
                {"text": "filtrem transmisyjnym", "valid": true},
                {"text": "oknem cz&#281;stotliwo&#347;ciowym kszta&#322;tuj&#261;cym widmo sygna&#322;u", "valid": false},
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
            "question": "W zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20d%28t%29%20%3D%20%5Csum_%7Bn%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20a_n%20%5Chspace%7B2pt%7D%20g%28t-nT%29%20\"> opisuj&#261;cej sygna&#322; telekomunikacyjny, <img src=\"http://latex.codecogs.com/png.latex?%20%20T%20\"> jest  ",
            "tip": "",
            "answer": [
                {"text": "czasem trwania symbolu", "valid": true},
                {"text": "czasem trwania bitu informacji", "valid": false},
                {"text": "odst&#281;pem pomi&#281;dzy pr&#243;bkami ", "valid": false},
                {"text": "okresem drga&#324; no&#347;nej", "valid": false},
                {"text": "czasem trwania pr&#243;bki ", "valid": false},
            ]
        },
        {
            "question": "Okno <img src=\"http://latex.codecogs.com/png.latex?%20%20w%20\"> w metodach estymacji widma stosowane jest w celu  ",
            "tip": "",
            "answer": [
                {"text": "zmniejszenia przecieku widma", "valid": true},
                {"text": "zmniejszenia wariancji estymatora wgm", "valid": true},
                {"text": "wyg&#322;adzenia sygna&#322;u", "valid": false},
                {"text": "wyci&#281;cia fragmentu sygna&#322;u", "valid": false},
                {"text": "zmniejszenia szeroko&#347;ci pasma przej&#347;ciowego", "valid": false},
            ]
        },
        {
            "question": "Poziomą osią wykresu funkcji autokorelacji jest oś: ",
            "tip": "",
            "answer": [
                {"text": "przesuni&#281;cia", "valid": true},
                {"text": "warto&#347;ci chwilowej", "valid": false},
                {"text": "amplitudy", "valid": false},
                {"text": "cz&#281;stotliwo&#347;ci", "valid": false},
                {"text": "czasu", "valid": false},
            ]
        },
        {
            "question": "W zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20d%28t%29%20%3D%20%5Csum_%7Bn%3D-%5Cinfty%7D%5E%7B%5Cinfty%7D%20a_n%20%5Chspace%7B2pt%7D%20g%28t-nT%29%20\"> opisuj&#261;cej sygna&#322; telekomunikacyjny, <img src=\"http://latex.codecogs.com/png.latex?%20%20a_n%20\"> jest  ",
            "tip": "",
            "answer": [
                {"text": "ci&#261;giem symboli zawieraj&#261;cych informacj&#281;", "valid": false},
                {"text": "ci&#261;giem warto&#347;ci odpowiadaj&#261;cych symbolom", "valid": true},
                {"text": "ci&#261;giem warto&#347;ci odpowiadaj&#261;cych bitom", "valid": false},
                {"text": "ci&#261;giem bit&#243;w zawieraj&#261;cych informacj&#281;", "valid": false},
                {"text": "sygna&#322;em dyskretnym przed modulacj&#261;", "valid": false},
            ]
        },
        {
            "question": "Po stronie nadawczej realizowane są następujące operacje ",
            "tip": "",
            "answer": [
                {"text": "kompresja", "valid": true},
                {"text": "kodowanie", "valid": true},
                {"text": "odtwarzanie no&#347;nej", "valid": false},
                {"text": "filtracja odszumiaj&#261;ca", "valid": false},
                {"text": "formowanie blok&#243;w i segment&#243;w", "valid": true},
                {"text": "dekompresja", "valid": false},
            ]
        },
        {
            "question": "W definicji transformacji Z <img src=\"http://latex.codecogs.com/png.latex?%20%20%5Csum_%7B-%5Cinfty%7D%5E%7B%5Cinfty%7D%20x%28t%29%20z%5E%7B-t%7D%20\"> wielko&#347;&#263; <img src=\"http://latex.codecogs.com/png.latex?%20%20z%20\"> oznacza  ",
            "tip": "",
            "answer": [
                {"text": "funkcj&#281; rzeczywist&#261;", "valid": false},
                {"text": "funkcje zespolon&#261;", "valid": false},
                {"text": "liczb&#281; zespolon&#261;", "valid": true},
                {"text": "liczb&#281; urojon&#261;", "valid": false},
                {"text": "funkcj&#281; urojon&#261;", "valid": false},
                {"text": "liczb&#281; rzeczywist&#261;", "valid": false},
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20s%28t%29%20%3D%20d%28t%29%20%5Ccos%282%20%5Cpi%20f%20t%20%29%20\"> jest zapisem matematycznym cyfrowej modulacji  ",
            "tip": "",
            "answer": [
                {"text": "z kluczowaniem cz&#261;stotliwo&#347;ci", "valid": false},
                {"text": "z kluczowaniem amplitudy", "valid": true},
                {"text": "fazy", "valid": false},
                {"text": "cz&#281;stotliwo&#347;ci", "valid": false},
                {"text": "z kluczowaniem fazy", "valid": false},
            ]
        },
        {
            "question": "Zwielokrotnienie TDMA (time division multiple access) oznacza ",
            "tip": "",
            "answer": [
                {"text": "jednoczesna prac&#281; wielu u&#380;ytkownik&#243;w na tej samej cz&#281;stotliwo&#347;ci i w tym samym czasie", "valid": false},
                {"text": "jednoczesn&#261; prac&#281; wielu u&#380;ytkownik&#243;w w tym samym czasie na zmieniaj&#261;cych si&#281; cz&#281;stotliwo&#347;ciach", "valid": false},
                {"text": "jednoczesn&#261; prac&#281; wielu u&#380;ytkownik&#243;w na tej samej cz&#281;stotliwo&#347;ci", "valid": true},
                {"text": "jednoczesn&#261; prac&#281; wielu u&#380;ytkownik&#243;w z wykorzystaniem r&#243;&#380;nych kod&#243;w dost&#281;pu", "valid": false},
            ]
        },
        {
            "question": "Modulacja QAM charakteryzuje się wykorzystaniem ",
            "tip": "",
            "answer": [
                {"text": "dw&#243;ch no&#347;nych o zbli&#380;onych cz&#281;stotliwo&#347;ciach przesuni&#281;tych o 180st", "valid": false},
                {"text": "dw&#243;ch no&#347;nych o tej samej cz&#281;stotliwo&#347;ci przesuni&#281;tych o 90st", "valid": true},
                {"text": "dw&#243;ch no&#347;nych o tej samej cz&#281;stotliwo&#347;ci przesuni&#281;tych o 180st", "valid": false},
                {"text": "dw&#243;ch no&#347;nych o zbli&#380;onych cz&#281;stotliwo&#347;ciach przesuni&#281;tych o 90st", "valid": false},
            ]
        },
        {
            "question": "Cyklostacjonarność definiowana jest dla: ",
            "tip": "",
            "answer": [
                {"text": "sygna&#322;&#243;w okresowych", "valid": false},
                {"text": "dowolnych sygna&#322;&#243;w stacjonarnych", "valid": false},
                {"text": "sygna&#322;&#243;w telekomunikacji cyfrowej", "valid": true},
                {"text": "sygna&#322;&#243;w telekomunikacyjnych", "valid": false},
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
            "question": "Jeśli <img src=\"http://latex.codecogs.com/png.latex?%20%20%5Calpha%20\"> jest poziomem ufno&#347;ci a <img src=\"http://latex.codecogs.com/png.latex?%20%20%5Ba%2Cb%5D%20\"> jest przedzia&#322;em ufno&#347;ci estymatora <img src=\"http://latex.codecogs.com/png.latex?%20%20%5Chat%20A%20\"> o rozk&#322;adzie <img src=\"http://latex.codecogs.com/png.latex?%20%20f%28%5Chat%20A%29%20\">, to prawdziwa jest zale&#380;no&#347;&#263;  ",
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
                {"text": "warto&#347;ci chwilowej", "valid": false},
                {"text": "cz&#281;stotliwo&#347;ci", "valid": false},
                {"text": "amplitudy", "valid": false},
                {"text": "czasu", "valid": true},
                {"text": "przesuni&#281;cia", "valid": false},
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
                {"text": "cz&#281;stotliwo&#347;ci pr&#243;bkowania dzielimy przez rzeczywist&#261; cz&#281;stotliwo&#347;&#263;", "valid": false},
                {"text": "cz&#281;stotliwo&#347;&#263; pr&#243;bkowania dzielimy przez podw&#243;jna rzeczywist&#261; cz&#281;stotliwo&#347;&#263;", "valid": false},
                {"text": "rzeczywist&#261; cz&#281;stotliwo&#347;&#263; dzielimy przez podw&#243;jn&#261; cz&#281;stotliwo&#347;ci pr&#243;bkowania", "valid": false},
                {"text": "rzeczywist&#261; cz&#281;stotliwo&#347;&#263; dzielimy przez cz&#281;stotliwo&#347;ci pr&#243;bkowania", "valid": true},
            ]
        },
        {
            "question": "Szerokość pasma przejściowego filtru cyfrowego nie może być zerowa, ponieważ ",
            "tip": "",
            "answer": [
                {"text": "taki filtr by&#322;by filtrem nieprzyczynowym", "valid": false},
                {"text": "wzmocnienie takiego filtru by&#322;oby niesko&#324;czenie wielkie", "valid": false},
                {"text": "przej&#347;cie pomi&#281;dzy pasmem przepustowym a zaporowym nie mo&#380;e si&#281; odbywa&#263; w niesko&#324;czenie kr&#243;tkim czasie", "valid": false},
                {"text": "liczba zer lub biegun&#243;w musia&#322;aby by&#263; niesko&#324;czona", "valid": true},
            ]
        },
        {
            "question": "Filtr cyfrowy jest stabilny, jeśli ",
            "tip": "",
            "answer": [
                {"text": "bieguny transmitancji le&#380;&#261; wewn&#261;trz okr&#281;gu jednostkowego", "valid": true},
                {"text": "zera i bieguny transmitancji le&#380;&#261; wewn&#261;trz okr&#281;gu jednostkowego", "valid": false},
                {"text": "bieguny transmitancji le&#380;&#261; w lewej p&#243;&#322;p&#322;aszczy&#378;nie", "valid": false},
                {"text": "zera transmitancji le&#380;&#261; w lewej p&#243;&#322;p&#322;aszczy&#380;nie", "valid": false},
                {"text": "zera transmitancji le&#380;&#261; wewn&#261;trz okr&#281;gu jednostkowego", "valid": false},
            ]
        },
        {
            "question": "Zmienną niezależną histogramu jest: ",
            "tip": "",
            "answer": [
                {"text": "przesuni&#281;cie", "valid": false},
                {"text": "czas", "valid": false},
                {"text": "warto&#347;&#263; chwilowa", "valid": true},
                {"text": "amplituda", "valid": false},
                {"text": "cz&#281;stotliwo&#347;&#263;", "valid": false},
            ]
        },
        {
            "question": "Przeciek widma w wyniku transformacji Fouriera występuje ponieważ ",
            "tip": "",
            "answer": [
                {"text": "wyst&#281;puj&#261; b&#322;&#281;dy kwantowania", "valid": false},
                {"text": "dokonano uzupe&#322;nienia sygna&#322;u zerowymi pr&#243;bkami", "valid": true},
                {"text": "wyst&#281;puje efekt obci&#281;cia", "valid": true},
                {"text": "sygna&#322; nie jest symetryczny", "valid": false},
                {"text": "wyst&#281;puj&#261; b&#322;&#281;dy pr&#243;bkowania", "valid": false},
            ]
        },
        {
            "question": "Do zbudowania grafu przepływu filtra cyfrowego potrzebne są elementy ",
            "tip": "",
            "answer": [
                {"text": "mno&#380;&#261;ce pr&#243;bk&#281; przez liczb&#281;", "valid": true},
                {"text": "sumuj&#261;ce kilka pr&#243;bek", "valid": false},
                {"text": "sumuj&#261;ce 2 pr&#243;bki", "valid": true},
                {"text": "rotuj&#261;ce", "valid": false},
                {"text": "op&#243;&#378;niaj&#261;ce", "valid": true},
                {"text": "mno&#380;&#261;ce pr&#243;bki", "valid": false},
            ]
        },
        {
            "question": "Zależność <img src=\"http://latex.codecogs.com/png.latex?%20%20C%28t_1%2Ct_2%29%20%3D%20E%20%5C%7B%20%5Bx%28t_1%29%20-%20m%28t_1%29%5D%5Bx%28t_2%29%20-%20m%28t_2%29%5D%20%5C%7D%20\"> definiuje:  ",
            "tip": "",
            "answer": [
                {"text": "funkcj&#281; autokorelacji dowolnego procesu ", "valid": false},
                {"text": "funkcj&#281; autokorelacji procesu stacjonarnego", "valid": false},
                {"text": "funkcj&#281; autokowariancji procesu stacjonarnego", "valid": false},
                {"text": "funkcj&#281; autokowariancji dowolnego procesu", "valid": true},
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
                {"text": "sko&#324;czonych iteracji", "valid": false},
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
                {"text": "wyboru fragment&#243;w realizacji", "valid": false},
                {"text": "realizacji pr&#243;bkowania i kwantowania sygna&#322;u", "valid": false},
                {"text": "wyboru fragmentu realizacji", "valid": true},
                {"text": "liczby pr&#243;bek", "valid": false},
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
                {"text": "cz&#281;stotliwo&#347;ci", "valid": false},
                {"text": "z kluczowaniem fazy", "valid": true},
                {"text": "amplitudy", "valid": false},
                {"text": "z kluczowaniem cz&#281;stotliwo&#347;ci", "valid": false},
            ]
        }
    ]
}