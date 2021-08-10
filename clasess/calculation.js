class CUL {
    basedOnResult (winer) {
        switch (winer) {
            case 'cp':
                document.querySelector('.cryP').style.display = 'flex';
                ui.loseAnime();
                lc.addLC('PC');
                lc.WriteandShow();
                break;
            case 'user':
                document.querySelector('.hp').style.display = 'inline-block';
                document.querySelector('.hph').style.display = 'inline-block';
                ui.winAnime();
                lc.addLC('US');
                lc.WriteandShow();
                break;
            case 'equal':
                ui.equalAnime();
                break;
        }
        
    }


    winer(CPchoose){
        switch (userchoose) {
            case '0':
                switch (CPchoose) {
                    case '00':
                        return 'equal';
                        break;
                    case '11':
                        return 'cp';
                        break;
                    case '22':
                        return 'user';
                        break;
                    case '33':
                        return 'user';
                        break;
                    case '44':
                        return 'cp';
                        break;
                }
                break;

            case '1':
                switch (CPchoose) {
                    case '00':
                        return 'user';
                    case '11':
                        return 'equal';
                    case '22':
                        return 'cp';
                        break;
                    case '33':
                        return 'cp';
                        break;
                    case '44':
                        return 'user';
                        break;
                }
                break;

            case '2':
                switch (CPchoose) {
                    case '00':
                        return 'cp';
                        break;
                    case '11':
                        return 'user';
                        break;
                    case '22':
                        return 'equal';
                        break;
                    case '33':
                        return 'user';
                        break;
                    case '44':
                        return 'cp';
                        break;
                }
                
                break;

            case '3':
                switch (CPchoose) {
                    case '00':
                        return 'cp';
                        break;
                    case '11':
                        return 'user';
                        break;
                    case '22':
                        return 'cp';
                        break;
                    case '33':
                        return 'equal';
                        break;
                    case '44':
                        return 'user';
                        break;
                }
                
                break;
                
            case '4':
                switch (CPchoose) {
                    case '00':
                        return 'user';
                        break;
                    case '11':
                        return 'cp';
                        break;
                    case '22':
                        return 'user';
                        break;
                    case '33':
                        return 'cp';
                        break;
                    case '44':
                        return 'equal';
                        break;
                }
                break;
        }
    }

}