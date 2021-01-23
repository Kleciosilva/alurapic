import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  photos = [
    {
      url: 'https://s2.glbimg.com/lPCXFVN09dfb211Z6zdLTYqY-rE=/0x0:1777x937/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2019/t/G/CBFs3RRjAjF4ZODnlhVA/o-rei-leao-simba-jovem.jpg',
      description: 'Simba'
    },
    {
      url: 'https://veja.abril.com.br/wp-content/uploads/2019/07/blogib_o-rei-leao-2019_feat.jpg',
      description: 'Leão'
    }
  ]
}
