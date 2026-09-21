AOS.init({duration:800,easing:'ease-out-cubic',once:true,offset:70});

// ===============================
// DATA KELINCI — GANTI BAGIAN INI
// ===============================
const rabbits = [
  {
    id:'hachi-01', name:'Mochi', age:'8 bulan', gender:'♂', genderText:'Jantan', breed:'Fuzzy Lop', key:'fuzzy', color:'White / Broken', status:'available', ratio:'4/5',
    image:'https://upload.wikimedia.org/wikipedia/commons/0/08/Rabbit_american_fuzzy_lop_buck_white.jpg',
    description:'Contoh profil untuk kelinci Fuzzy Lop. Ganti dengan nama dan data kelinci Hachi Rabbit kamu.',
    source:'Foto referensi: Lithonius · Public Domain · Wikimedia Commons'
  },
  {
    id:'hachi-02', name:'Boba', age:'1 tahun 2 bulan', gender:'♀', genderText:'Betina', breed:'Rex', key:'rex', color:'Castor / Brown', status:'available', ratio:'3/4',
    image:'https://upload.wikimedia.org/wikipedia/commons/2/26/Rex_rabbit.jpg',
    description:'Contoh profil Rex dengan karakter bulu velvet. Data ini hanya demo untuk tampilan website.',
    source:'Foto referensi: DestinationFearFan · CC BY-SA 4.0 · Wikimedia Commons'
  },
  {
    id:'hachi-03', name:'Coco', age:'10 bulan', gender:'♀', genderText:'Betina', breed:'Holland Lop', key:'holland', color:'Orange / Agouti', status:'sold', ratio:'4/3',
    image:'https://upload.wikimedia.org/wikipedia/commons/6/61/Holland_lop_bunny.JPG',
    description:'Contoh profil Holland Lop untuk menunjukkan tampilan status Sold.',
    source:'Foto referensi: Orlandkurtenbach · Public Domain · Wikimedia Commons'
  },
  {
    id:'hachi-04', name:'Latte', age:'6 bulan', gender:'♂', genderText:'Jantan', breed:'Netherland Dwarf', key:'netherland', color:'Blue / Grey', status:'available', ratio:'1/1',
    image:'https://upload.wikimedia.org/wikipedia/commons/d/d0/Netherland_Dwarf_rabbit.jpg',
    description:'Contoh profil Netherland Dwarf yang bisa dipakai ketika Hachi mulai ekspansi breed.',
    source:'Foto referensi: DestinationFearFan · CC BY-SA 4.0 · Wikimedia Commons'
  },
  {
    id:'hachi-05', name:'Mimi', age:'9 bulan', gender:'♀', genderText:'Betina', breed:'Fuzzy Lop', key:'fuzzy', color:'White / Grey', status:'sold', ratio:'1/1',
    image:'https://upload.wikimedia.org/wikipedia/commons/0/08/Rabbit_american_fuzzy_lop_buck_white.jpg',
    description:'Contoh kartu kedua untuk membuat masonry gallery terlihat lebih hidup.',
    source:'Foto referensi: Lithonius · Public Domain · Wikimedia Commons'
  },
  {
    id:'hachi-06', name:'Oreo', age:'1 tahun', gender:'♂', genderText:'Jantan', breed:'Rex', key:'rex', color:'Brown', status:'sold', ratio:'3/4',
    image:'https://upload.wikimedia.org/wikipedia/commons/2/26/Rex_rabbit.jpg',
    description:'Contoh data demo. Kamu bebas menambah puluhan kartu tanpa mengubah struktur layout.',
    source:'Foto referensi: DestinationFearFan · CC BY-SA 4.0 · Wikimedia Commons'
  }
];

const masonry=document.getElementById('rabbitMasonry');
let selectedBreed='all', selectedStatus='all';

function renderRabbits(){
  masonry.innerHTML='';
  rabbits.forEach((rabbit,index)=>{
    const visible=(selectedBreed==='all'||rabbit.key===selectedBreed)&&(selectedStatus==='all'||rabbit.status===selectedStatus);
    const card=document.createElement('article');
    card.className='rabbit-card'+(visible?'':' hidden');
    card.dataset.id=rabbit.id;
    card.style.setProperty('--ratio',rabbit.ratio);
    card.innerHTML=`
      <div class="rabbit-photo">
        <img src="${rabbit.image}" alt="${rabbit.name} — ${rabbit.breed}" loading="lazy">
        <span class="status ${rabbit.status}">${rabbit.status==='available'?'● AVAILABLE':'● SOLD'}</span>
        <div class="photo-overlay"><span class="zoom-label">CLICK TO VIEW DETAIL ↗</span></div>
      </div>
      <div class="rabbit-info">
        <div class="rabbit-top"><div><h3>${rabbit.name}</h3><span class="breed-label">${rabbit.breed.toUpperCase()}</span></div><span class="gender">${rabbit.gender}</span></div>
        <div class="meta"><span>🎂 ${rabbit.age}</span><span>🎨 ${rabbit.color}</span><span>⚥ ${rabbit.genderText}</span></div>
        <p class="rabbit-description">${rabbit.description}</p>
      </div>`;
    card.addEventListener('click',()=>openDetail(rabbit));
    masonry.appendChild(card);
  });
}
renderRabbits();

function setupFilter(groupId, attribute, setter){
  document.querySelectorAll(`#${groupId} .filter`).forEach(btn=>btn.addEventListener('click',()=>{
    document.querySelectorAll(`#${groupId} .filter`).forEach(x=>x.classList.remove('active'));
    btn.classList.add('active'); setter(btn.dataset[attribute]); renderRabbits();
  }));
}
setupFilter('breedFilters','filter',v=>selectedBreed=v);
setupFilter('statusFilters','status',v=>selectedStatus=v);

const lightbox=document.getElementById('lightbox'), modal=document.getElementById('detailModal');
function openDetail(r){
  modal.innerHTML=`<div class="detail-grid">
    <div class="detail-photo"><img src="${r.image}" alt="${r.name} — ${r.breed}"></div>
    <div class="detail-copy">
      <span class="status ${r.status}">${r.status==='available'?'● AVAILABLE':'● SOLD'}</span>
      <h2>${r.name}</h2><span class="breed-label">${r.breed.toUpperCase()}</span>
      <p>${r.description}</p>
      <div class="detail-meta"><div><small>Umur</small><b>${r.age}</b></div><div><small>Gender</small><b>${r.gender} ${r.genderText}</b></div><div><small>Warna</small><b>${r.color}</b></div><div><small>Status</small><b>${r.status==='available'?'Available':'Sold'}</b></div></div>
      <a href="#contact" class="btn btn-primary" onclick="closeDetail()">Kenalan dengan Hachi →</a>
      <p class="source">${r.source}</p>
    </div></div>`;
  lightbox.classList.add('open');lightbox.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';
}
function closeDetail(){lightbox.classList.remove('open');lightbox.setAttribute('aria-hidden','true');document.body.style.overflow='';}
document.getElementById('lightboxClose').addEventListener('click',closeDetail);lightbox.addEventListener('click',e=>{if(e.target===lightbox)closeDetail()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closeDetail()});

const navbar=document.getElementById('navbar'), backTop=document.getElementById('backTop');
window.addEventListener('scroll',()=>{navbar.classList.toggle('scrolled',scrollY>60);backTop.classList.toggle('show',scrollY>600)});
backTop.addEventListener('click',()=>scrollTo({top:0,behavior:'smooth'}));
const menuToggle=document.getElementById('menuToggle'), navMenu=document.getElementById('navMenu');
menuToggle.addEventListener('click',()=>navMenu.classList.toggle('open'));navMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navMenu.classList.remove('open')));
