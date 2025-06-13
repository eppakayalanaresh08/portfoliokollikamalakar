import { LucideIcon } from 'lucide-react';

import Posterone from '../assets/POST1.jpg'
import PosterTwo from '../assets/POST2.jpg'
import PosterThree from '../assets/POST3.jpg'
import PosterFour from '../assets/POST4.jpg'
import PosterFive from '../assets/POST5.jpg'
import PosterSix from '../assets/POST6.jpg'
import PosterSeven from '../assets/Post7.jpg'
import Poster8 from '../assets/Posto8.jpg'
import Poster9 from '../assets/Post9.jpg'
import Poster10 from '../assets/Post10.jpg'
import Poster11 from '../assets/Post11.jpg'
import Poster12 from '../assets/Post12.jpeg'
import Poster13 from '../assets/Post13.jpg'
import Poster14 from '../assets/Post14.JPG'
import Poster15 from '../assets/Post15.JPG'
import Poster16 from '../assets/Post16.jpg'
import Poster17  from '../assets/Post17.jpg'
import Poster18 from '../assets/Post18.jpg'
import Poster19 from '../assets/Post19.jpg'
import Poster20 from '../assets/Post20.jpg'

import Poster21 from '../assets/Post21.jpg'
import Poster22 from '../assets/Post22.jpg'
import Poster23 from '../assets/Post23.jpg'

import Poster24 from '../assets/Post24.jpg'

import Ads1 from '../assets/ads/ad1.JPG'

import Ads2 from '../assets/ads/ad2.JPG'

import Ads3 from '../assets/ads/ad3.JPG'

import Ads4 from '../assets/ads/ad4.jpg'

import Ads5 from '../assets/ads/ad5.JPG'

import Ads6 from '../assets/ads/ad6.JPG'

import Ads7 from '../assets/ads/ad7.JPG'

import Ads8 from '../assets/ads/ad8.JPG'

import Ads9 from '../assets/ads/ad9.JPG'

import Ads10 from '../assets/ads/ad10.JPG'


import Ads11 from '../assets/ads/ad11.jpg'

import Ads12 from '../assets/ads/ad12.jpg'


import Ads13 from '../assets/ads/ad13.jpg'


import Ads14 from '../assets/ads/ad14.jpg'



import Ads15 from '../assets/ads/ad15.JPG'


import Ads16 from '../assets/ads/ad16.JPG'



import Ads17 from '../assets/ads/ad17.jpg'


import Ads18 from '../assets/ads/ad18.jpg'


import Ads19 from '../assets/ads/ad19.png'


import Ads20 from '../assets/ads/ad20.png'
import Ads21 from '../assets/ads/ad21.png'


import Ads22 from '../assets/ads/ad22.png'


import Ads23 from '../assets/ads/ad23.JPG'

import pg1 from '../assets/pg/pg1.JPG'
import pg2 from '../assets/pg/pg2.JPG'
import pg3 from '../assets/pg/pg3.JPG'

import pg4 from '../assets/pg/pg4.JPG'

import pg5 from '../assets/pg/pg5.JPG'

import pg6 from '../assets/pg/pg1.JPG'



import logo1 from '../assets/logo/logo1.png'

import logo2 from '../assets/logo/logo2.png'

import logo3 from '../assets/logo/logo3.png'

import logo4 from '../assets/logo/logo4.png'

import logo5 from '../assets/logo/logo5.JPG'

import logo6 from '../assets/logo/logo6.PNG'


import logo7 from '../assets/logo/logo7.png'






















export interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  link?: string;
}

export interface ProjectsDataType {

  posters: Project[];
  ads: Project[];
  photoEdits: Project[];
  drawings: Project[];
  photography: Project[];
}

export const projectsData: ProjectsDataType = {
  posters: [
    {
      title: "Event Promotion Poster",
      description: "A vibrant poster design for a music festival featuring dynamic typography and gradient effects.",
      image: Posterone,
      category: "Poster Design",
      link: "#"
    },
    {
      title: "Movie Premiere Announcement",
      description: "Dramatic poster design for a film premiere with atmospheric lighting and compelling visuals.",
      image: PosterTwo,
      category: "Poster Design",
      link: "#"
    },
    {
      title: "Corporate Event Poster",
      description: "Clean and professional poster design for a business conference with modern elements.",
      image:PosterThree,
      category: "Poster Design",
      link: "#"
    },
    {
      title: "Art Exhibition Poster",
      description: "Artistic poster for a gallery exhibition featuring abstract elements and bold typography.",
      image: PosterFour,
      category: "Poster Design",
      link: "#"
    }
    ,
    {
      title: "Art Exhibition Poster",
      description: "Artistic poster for a gallery exhibition featuring abstract elements and bold typography.",
      image: PosterFive,
      category: "Poster Design",
      link: "#"
    }
    ,
    {
      title: "Art Exhibition Poster",
      description: "Artistic poster for a gallery exhibition featuring abstract elements and bold typography.",
      image: PosterSix,
      category: "Poster Design",
      link: "#"
    },
    {
      title: "Art Exhibition Poster",
      description: "Artistic poster for a gallery exhibition featuring abstract elements and bold typography.",
      image: PosterSeven,
      category: "Poster Design",
      link: "#"
    }
    ,
    {
      title: "Art Exhibition Poster",
      description: "Artistic poster for a gallery exhibition featuring abstract elements and bold typography.",
      image: Poster8,
      category: "Poster Design",
      link: "#"
    }
    ,
    {
      title: "Art Exhibition Poster",
      description: "Artistic poster for a gallery exhibition featuring abstract elements and bold typography.",
      image: Poster9,
      category: "Poster Design",
      link: "#"
    }
    ,
    {
      title: "Art Exhibition Poster",
      description: "Artistic poster for a gallery exhibition featuring abstract elements and bold typography.",
      image: Poster10,
      category: "Poster Design",
      link: "#"
    }
    ,
    {
      title: "Art Exhibition Poster",
      description: "Artistic poster for a gallery exhibition featuring abstract elements and bold typography.",
      image: Poster11,
      category: "Poster Design",
      link: "#"
    }
    ,
    {
      title: "Art Exhibition Poster",
      description: "Artistic poster for a gallery exhibition featuring abstract elements and bold typography.",
      image: Poster12,
      category: "Poster Design",
      link: "#"
    }
    ,
    {
      title: "Art Exhibition Poster",
      description: "Artistic poster for a gallery exhibition featuring abstract elements and bold typography.",
      image: Poster13,
      category: "Poster Design",
      link: "#"
    }
    ,
    {
      title: "Art Exhibition Poster",
      description: "Artistic poster for a gallery exhibition featuring abstract elements and bold typography.",
      image: Poster14,
      category: "Poster Design",
      link: "#"
    },
    {
      title: "Art Exhibition Poster",
      description: "Artistic poster for a gallery exhibition featuring abstract elements and bold typography.",
      image: Poster15,
      category: "Poster Design",
      link: "#"
    }
    ,
    {
      title: "Art Exhibition Poster",
      description: "Artistic poster for a gallery exhibition featuring abstract elements and bold typography.",
      image: Poster16,
      category: "Poster Design",
      link: "#"
    }
    ,
    {
      title: "Art Exhibition Poster",
      description: "Artistic poster for a gallery exhibition featuring abstract elements and bold typography.",
      image: Poster17,
      category: "Poster Design",
      link: "#"
    }
    
    ,
    {
      title: "Art Exhibition Poster",
      description: "Artistic poster for a gallery exhibition featuring abstract elements and bold typography.",
      image: Poster18,
      category: "Poster Design",
      link: "#"
    }
    ,
    {
      title: "Art Exhibition Poster",
      description: "Artistic poster for a gallery exhibition featuring abstract elements and bold typography.",
      image: Poster19,
      category: "Poster Design",
      link: "#"
    }

    ,
    {
      title: "Art Exhibition Poster",
      description: "Artistic poster for a gallery exhibition featuring abstract elements and bold typography.",
      image: Poster20,
      category: "Poster Design",
      link: "#"
    }
    ,
    {
      title: "Art Exhibition Poster",
      description: "Artistic poster for a gallery exhibition featuring abstract elements and bold typography.",
      image: Poster21,
      category: "Poster Design",
      link: "#"
    }
    ,
    {
      title: "Art Exhibition Poster",
      description: "Artistic poster for a gallery exhibition featuring abstract elements and bold typography.",
      image: Poster22,
      category: "Poster Design",
      link: "#"
    }

    ,
    {
      title: "Art Exhibition Poster",
      description: "Artistic poster for a gallery exhibition featuring abstract elements and bold typography.",
      image: Poster23,
      category: "Poster Design",
      link: "#"
    }
    ,
    {
      title: "Art Exhibition Poster",
      description: "Artistic poster for a gallery exhibition featuring abstract elements and bold typography.",
      image: Poster24,
      category: "Poster Design",
      link: "#"
    }
  ],
  ads: [
    {
      title: "Product Launch Campaign",
      description: "Creative advertisement for a new product launch with eye-catching visuals and compelling copy.",
      image: Ads1,
      category: "Ad Creative",
      link: "#"
    },
    {
      title: "Social Media Campaign",
      description: "Engaging social media advertisement designed for maximum engagement across platforms.",
      image: Ads2,
      category: "Ad Creative",
      link: "#"
    },
    {
      title: "Seasonal Promotion",
      description: "Festive advertisement design for a holiday promotion featuring seasonal elements.",
      image: Ads3,
      category: "Ad Creative",
      link: "#"
    }
    ,
    {
      title: "Seasonal Promotion",
      description: "Festive advertisement design for a holiday promotion featuring seasonal elements.",
      image: Ads4,
      category: "Ad Creative",
      link: "#"
    }

    ,
    {
      title: "Seasonal Promotion",
      description: "Festive advertisement design for a holiday promotion featuring seasonal elements.",
      image: Ads5,
      category: "Ad Creative",
      link: "#"
    }
    ,
    {
      title: "Seasonal Promotion",
      description: "Festive advertisement design for a holiday promotion featuring seasonal elements.",
      image: Ads6,
      category: "Ad Creative",
      link: "#"
    }
    ,
    {
      title: "Seasonal Promotion",
      description: "Festive advertisement design for a holiday promotion featuring seasonal elements.",
      image: Ads7,
      category: "Ad Creative",
      link: "#"
    }
    ,
    {
      title: "Seasonal Promotion",
      description: "Festive advertisement design for a holiday promotion featuring seasonal elements.",
      image: Ads8,
      category: "Ad Creative",
      link: "#"
    }
    ,
    {
      title: "Seasonal Promotion",
      description: "Festive advertisement design for a holiday promotion featuring seasonal elements.",
      image: Ads9,
      category: "Ad Creative",
      link: "#"
    }
    ,
    {
      title: "Seasonal Promotion",
      description: "Festive advertisement design for a holiday promotion featuring seasonal elements.",
      image: Ads10,
      category: "Ad Creative",
      link: "#"
    }
    ,
    {
      title: "Seasonal Promotion",
      description: "Festive advertisement design for a holiday promotion featuring seasonal elements.",
      image: Ads11,
      category: "Ad Creative",
      link: "#"
    }
    ,
    {
      title: "Seasonal Promotion",
      description: "Festive advertisement design for a holiday promotion featuring seasonal elements.",
      image: Ads12,
      category: "Ad Creative",
      link: "#"
    }
    ,
    {
      title: "Seasonal Promotion",
      description: "Festive advertisement design for a holiday promotion featuring seasonal elements.",
      image: Ads13,
      category: "Ad Creative",
      link: "#"
    }
    ,
    {
      title: "Seasonal Promotion",
      description: "Festive advertisement design for a holiday promotion featuring seasonal elements.",
      image: Ads14,
      category: "Ad Creative",
      link: "#"
    }
    ,
    {
      title: "Seasonal Promotion",
      description: "Festive advertisement design for a holiday promotion featuring seasonal elements.",
      image: Ads15,
      category: "Ad Creative",
      link: "#"
    }
    ,
    {
      title: "Seasonal Promotion",
      description: "Festive advertisement design for a holiday promotion featuring seasonal elements.",
      image: Ads16,
      category: "Ad Creative",
      link: "#"
    }
    ,
    {
      title: "Seasonal Promotion",
      description: "Festive advertisement design for a holiday promotion featuring seasonal elements.",
      image: Ads17,
      category: "Ad Creative",
      link: "#"
    }
    ,
    {
      title: "Seasonal Promotion",
      description: "Festive advertisement design for a holiday promotion featuring seasonal elements.",
      image: Ads18,
      category: "Ad Creative",
      link: "#"
    }
    ,
    {
      title: "Seasonal Promotion",
      description: "Festive advertisement design for a holiday promotion featuring seasonal elements.",
      image: Ads19,
      category: "Ad Creative",
      link: "#"
    }
    ,
    {
      title: "Seasonal Promotion",
      description: "Festive advertisement design for a holiday promotion featuring seasonal elements.",
      image: Ads20,
      category: "Ad Creative",
      link: "#"
    }
    ,
    {
      title: "Seasonal Promotion",
      description: "Festive advertisement design for a holiday promotion featuring seasonal elements.",
      image: Ads21,
      category: "Ad Creative",
      link: "#"
    }
    ,
    {
      title: "Seasonal Promotion",
      description: "Festive advertisement design for a holiday promotion featuring seasonal elements.",
      image: Ads22,
      category: "Ad Creative",
      link: "#"
    }
    ,
    {
      title: "Seasonal Promotion",
      description: "Festive advertisement design for a holiday promotion featuring seasonal elements.",
      image: Ads23,
      category: "Ad Creative",
      link: "#"
    }
  ],
  photography: [
    {
      title: "Product Enhancement",
      description: "Professional photo editing to enhance product presentation with color correction and background removal.",
      image: pg1,
      category: "Photo Editing",
      link: "#"
    },
    {
      title: "Portrait Retouching",
      description: "Subtle portrait enhancement maintaining natural appearance while improving overall quality.",
      image: pg2,
      category: "Photo Editing",
      link: "#"
    },
    {
      title: "Creative Photo Manipulation",
      description: "Artistic photo manipulation combining multiple elements into a surreal composition.",
      image: pg3,
      category: "Photo Editing",
      link: "#"
    }
    ,
    {
      title: "Creative Photo Manipulation",
      description: "Artistic photo manipulation combining multiple elements into a surreal composition.",
      image: pg4,
      category: "Photo Editing",
      link: "#"
    }
    ,
    {
      title: "Creative Photo Manipulation",
      description: "Artistic photo manipulation combining multiple elements into a surreal composition.",
      image: pg5,
      category: "Photo Editing",
      link: "#"
    }
    ,
    {
      title: "Creative Photo Manipulation",
      description: "Artistic photo manipulation combining multiple elements into a surreal composition.",
      image: pg6,
      category: "Photo Editing",
      link: "#"
    }
  ],
  drawings: [
    {
      title: "Character Portrait",
      description: "Hand-drawn portrait with detailed shading and expressive features.",
      image: logo1,
      category: "Drawing",
      link: "#"
    },
    {
      title: "Realistic Portrait Study",
      description: "Realistic portrait drawing focusing on accurate proportions and detailed textures.",
      image: logo2,
      category: "Drawing",
      link: "#"
    },
    {
      title: "Abstract Composition",
      description: "Abstract drawing exploring form, texture, and emotion through non-representational elements.",
      image: logo3,
      category: "Drawing",
      link: "#"
    }

    ,
    {
      title: "Abstract Composition",
      description: "Abstract drawing exploring form, texture, and emotion through non-representational elements.",
      image: logo4,
      category: "Drawing",
      link: "#"
    }

    ,
    {
      title: "Abstract Composition",
      description: "Abstract drawing exploring form, texture, and emotion through non-representational elements.",
      image: logo5,
      category: "Drawing",
      link: "#"
    }

    // ,
    // {
    //   title: "Abstract Composition",
    //   description: "Abstract drawing exploring form, texture, and emotion through non-representational elements.",
    //   image: logo6,
    //   category: "Drawing",
    //   link: "#"
    // }
  ],
  // photography: [
  //   {
  //     title: "Urban Landscape",
  //     description: "City photography capturing the dynamic energy and architectural details of urban environments.",
  //     image: "https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     category: "Photography",
  //     link: "#"
  //   },
  //   {
  //     title: "Natural Portrait",
  //     description: "Environmental portrait photography in natural settings with authentic expressions.",
  //     image: "https://images.pexels.com/photos/2709385/pexels-photo-2709385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     category: "Photography",
  //     link: "#"
  //   },
  //   {
  //     title: "Abstract Details",
  //     description: "Macro photography exploring abstract patterns and textures found in everyday objects.",
  //     image: "https://images.pexels.com/photos/1144687/pexels-photo-1144687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     category: "Photography",
  //     link: "#"
  //   },
  //   {
  //     title: "Landscape Study",
  //     description: "Dramatic landscape photography capturing the beauty of natural environments with attention to light and composition.",
  //     image: "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     category: "Photography",
  //     link: "#"
  //   }
  // ]
};