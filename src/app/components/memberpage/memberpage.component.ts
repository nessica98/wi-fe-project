import { Component, OnInit } from '@angular/core';
import axios from 'axios';


@Component({
  selector: 'app-memberpage',
  templateUrl: './memberpage.component.html',
  styleUrls: ['./memberpage.component.css']
})
export class MemberpageComponent implements OnInit {
  artist_data:any[] = [
    {
      "BandName": "CIX",
      "ArtistName": "BX",
      "Birthday": "5 Mar 1998",
      "Profile_img_url": "https://pbs.twimg.com/media/EZ6vrLVVcAEHFh_?format=jpg"
  },
  {
      "BandName": "CIX",
      "ArtistName": "Seunghoon",
      "Birthday": "26 Feb 1998",
      "Profile_img_url": "https://pbs.twimg.com/media/EaFC2ZSUMAEJp4p?format=jpg"
  },
  {
      "BandName": "CIX",
      "ArtistName": "Bae Jinyoung",
      "Birthday": "10 May 2000",
      "Profile_img_url": "https://pbs.twimg.com/media/EaKMcT5UEAEsTI1?format=jpg"
  },
  {
      "BandName": "CIX",
      "ArtistName": "Yonghee",
      "Birthday": "17 Feb 2000",
      "Profile_img_url": "https://pbs.twimg.com/media/EaPWByWVAAEFvHx?format=jpg"
  },
  {
      "BandName": "CIX",
      "ArtistName":"Hyunsuk",
      "Birthday":"8 Sep 2001",
      "Profile_img_url": "https://pbs.twimg.com/media/EZ_xgBeUYAEix94?format=jpg"
  },
  {
      "BandName": "X1",
      "ArtistName":"Han Seungwoo",
      "Birthday":"24 Dec 1994",
      "Profile_img_url": "https://dbkpop.com/wp-content/uploads/2019/08/x1_quantum_leap_concept_hd_han_seungwoo-1333x2000.jpg"
  },
  {
      "BandName": "NU'EST",
      "ArtistName": "Hwang Minhyun",
      "Birthday": "9 Aug 1995",
      "Profile_img_url":"https://kpopping.com/uploads/documents/batch_LIV_5720-copy.jpeg"
  }
  ];
  constructor() { }

  ngOnInit(): void {
    axios.get('http://localhost:5000/artist').then((res)=>{
        console.log(res);
        this.artist_data = res.data;
    })
  }

}
