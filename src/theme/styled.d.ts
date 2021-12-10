// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    color: {
      primary: string;
      link: string;
      text: string;
      textPrincipal: string;
      textHeader: string;
      button: string;
      border: string;
      borderHeader: string;
      badge: string;
      header: string;
    };
  }
}
