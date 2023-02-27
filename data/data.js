export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ? process.env.NEXT_PUBLIC_BASE_URL :'https://chih3b.pythonanywhere.com'
export const FRONTEND_URL = process.env.NODE_ENV==="development"?"http://localhost:3000/" :'https://quantum-sec.vercel.app/'

export const members= [
    {
        firstname:"Ahmed",
        lastname:"Sehili",
        image:"/sections/team/ahmed.svg"
    },
    {
        firstname:"Maroua",
        lastname:"Amrouche",
        image:"/sections/team/maroua.svg"
    }
    ,
    {
        firstname:"Chiheb",
        lastname:"Yaici",
        image:"/sections/team/chiheb.jpg"
    },
    {
      firstname:"Selina",
      lastname:"Sendjakeddine",
      image:"/sections/team/selina.jpg"
  },
  {
    firstname:"Abdelalim",
    lastname:"Atoui",
    image:"/sections/team/abdelalim.svg"
}
] 

export const questions =[
    {
        id:1,
        title:'What is wrong with current ciphers?',
        desc:'Nothing, but just for now, predictions state that in 15 years a 512 bit lenghted key will break under the power of a quantum computer!',
    },
    {
        id:2,
        title:'What does QTM use as an encryption?',
        desc:'QTM uses the new NTRUEncrypt to code your data, which is quantum safe algorithm.',
    },
    {
        id:3,
        title:'How is NTRUEncrypt not breakable?',
        desc:'Current ciphers breaking order is polyniomial, while the NTRUEncrypt algirthm require an exponotial order of operations to break which can\'t be broken by QCs in 100 years.',
    },
    {
        id:4,
        title:'Is there a possible loss of data?',
        desc:'No, the algorithm is corruption free.',
    }
]
export const text = [
    {p1 : 'It is safe to say that Modern cryptography is currently unbreakable and that is primary due to the complexity of the math behind it, the length of keys used, and we can add to that the incapability of current computers to break large ciphers.',
     p2 : 'But that era of safe data is actually being threatened by the appearance of QCs powerful devices based on new technologies.',
     p3 : 'Current QCs cant break our standard encryption method, but predictions assure that this may change in an early future',
     p4 : 'It is therefore crucial to be able to find and implement post quantum methods, not for now, but for an upcoming future!',
     p5 : 'This is where QTM comes in, by providing and implementation of the NTRUEcrypt algorithm, which can’t be broken by QCs in a 100 years.'
},
];

export function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};