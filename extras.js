/* Jamuna's All In One - extras: social bar, Instagram section, Google Map, Tamil/English */
(function(){
/* ===== CONFIG: edit here ===== */
const CFG={
 IG_URL:'https://www.instagram.com/jamunas_home_renovations',
 IG_HANDLE:'@jamunas_home_renovations',
 FB_URL:'https://www.facebook.com/share/19pwhegTBh/',
 MAP_QUERY:'13.0547493,80.2039025'
};
/* ============================= */
const g=id=>document.getElementById(id);
const enc=encodeURIComponent;
const IGI='<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#fff"/></svg>';
const FBI='<svg viewBox="0 0 24 24" width="24" height="24" fill="#fff"><path d="M14 8h3V4h-3a4 4 0 0 0-4 4v3H7v4h3v7h4v-7h3l1-4h-4V8z"/></svg>';

/* ---------- Tamil dictionary ---------- */
const TA={
'About':'எங்களைப் பற்றி','Location':'இருப்பிடம்','Contact':'தொடர்பு','Services':'சேவைகள்','Gallery':'கேலரி','Reviews':'மதிப்புரைகள்','Call 8682929419':'அழைக்க 8682929419',
'One team for every corner of your':'உங்கள் வீட்டின் ஒவ்வொரு மூலைக்கும் ஒரே','home.':'குழு.',
'Painting, electrical, plumbing, tiles, interiors, modular kitchens and false ceilings. One call, one quote, one team that finishes the job.':'பெயிண்டிங், எலக்ட்ரிக்கல், பிளம்பிங், டைல்ஸ், இன்டீரியர், மாடுலர் கிச்சன், ஃபால்ஸ் சீலிங் அனைத்தும் ஒரே இடத்தில். ஒரு அழைப்பு, ஒரு விலைப்புள்ளி, வேலையை முடிக்கும் ஒரே குழு.',
'We are experts in':'நாங்கள் நிபுணர்கள்:',
'Painting':'பெயிண்டிங்','Electrical':'எலக்ட்ரிக்கல்','Plumbing':'பிளம்பிங்','Renovation':'புதுப்பித்தல்','Tiles':'டைல்ஸ்','Interior Work':'இன்டீரியர் வேலை','Modular Kitchen':'மாடுலர் கிச்சன்','False Ceiling':'ஃபால்ஸ் சீலிங்',
'Get a free quote':'இலவச விலைப்புள்ளி பெற','Call now':'இப்போதே அழைக்க',
'Years of experience':'ஆண்டு அனுபவம்','Homes completed':'முடிந்த வீடுகள்','Services, one team':'சேவைகள், ஒரே குழு','Free site visits':'இலவச தள பார்வை',
'A home project should not need five phone calls':'ஒரு வீட்டு வேலைக்கு ஐந்து போன் அழைப்புகள் தேவையில்லை',
'Jamuna’s All In One brings painters, electricians, plumbers and tile masons together, so your renovation runs on one plan, one schedule and one price.':'ஜமுனாஸ் ஆல் இன் ஒன் பெயிண்டர்கள், எலக்ட்ரீஷியன்கள், பிளம்பர்கள், டைல்ஸ் மேஸ்திரிகளை ஒன்றிணைக்கிறது; உங்கள் புதுப்பிப்பு ஒரே திட்டம், ஒரே அட்டவணை, ஒரே விலையில் நடக்கும்.',
'Free site visit and written quote':'இலவச தள பார்வை மற்றும் எழுத்துப்பூர்வ விலைப்புள்ளி','Skilled, trained workers for every trade':'ஒவ்வொரு துறைக்கும் திறமையான, பயிற்சி பெற்ற பணியாளர்கள்','Work finished on the agreed date':'ஒப்புக்கொண்ட தேதியில் வேலை முடிவு','Clean site and tidy handover':'சுத்தமான தளம், நேர்த்தியான ஒப்படைப்பு',
'Everything your home needs, under one roof':'உங்கள் வீட்டிற்குத் தேவையான அனைத்தும், ஒரே கூரையின் கீழ்',
'Pick one service or combine them. We plan the work so each trade finishes before the next begins.':'ஒரு சேவையைத் தேர்வு செய்யுங்கள் அல்லது இணைத்துக்கொள்ளுங்கள். ஒவ்வொரு வேலையும் அடுத்தது தொடங்கும் முன் முடியும்படி திட்டமிடுகிறோம்.',
'Smooth, long-lasting finishes for inside and outside walls.':'உள் மற்றும் வெளிச் சுவர்களுக்கு மென்மையான, நீடித்த பூச்சு.','Interior and exterior':'உட்புறம் மற்றும் வெளிப்புறம்','Putty and waterproofing':'புட்டி மற்றும் வாட்டர்ப்ரூஃபிங்','Texture and wood polish':'டெக்ஸ்சர் மற்றும் மர பாலிஷ்',
'Safe wiring and fittings done by experienced hands.':'அனுபவமிக்கவர்களால் பாதுகாப்பான வயரிங் மற்றும் பொருத்துதல்.','New wiring and rewiring':'புதிய வயரிங் மற்றும் மறுவயரிங்','Switchboards and lights':'ஸ்விட்ச்போர்டு மற்றும் விளக்குகள்','Fan, AC and fault repairs':'ஃபேன், ஏசி மற்றும் பழுது சரிசெய்தல்',
'Leaks fixed properly, new fittings installed cleanly.':'கசிவுகள் முறையாக சரிசெய்யப்பட்டு, புதிய பொருத்துதல்கள் நேர்த்தியாக நிறுவப்படும்.','Leak and seepage repair':'கசிவு மற்றும் ஈரப்பதம் பழுது','Bathroom and kitchen fittings':'குளியலறை மற்றும் சமையலறை பொருத்துதல்','Pipelines and tanks':'குழாய்கள் மற்றும் டேங்குகள்',
'From a single room refresh to a complete home makeover.':'ஒரு அறை புதுப்பிப்பு முதல் முழு வீட்டின் மாற்றம் வரை.','Room and kitchen remodel':'அறை மற்றும் சமையலறை மறுவடிவமைப்பு','False ceiling and carpentry':'ஃபால்ஸ் சீலிங் மற்றும் தச்சு வேலை','Repairs and finishing':'பழுது மற்றும் இறுதி வேலை',
'Level, clean tile work with tight joints that last.':'சமமான, சுத்தமான, நீடித்த டைல்ஸ் வேலை.','Floor and wall tiles':'தரை மற்றும் சுவர் டைல்ஸ்','Granite and marble':'கிரானைட் மற்றும் மார்பிள்','Bathroom and kitchen tiling':'குளியலறை மற்றும் சமையலறை டைலிங்',
'Complete home interiors, designed and built to your budget.':'உங்கள் பட்ஜெட்டுக்கு ஏற்ப வடிவமைத்து அமைக்கப்படும் முழு வீட்டு இன்டீரியர்.','TV units and wardrobes':'டிவி யூனிட் மற்றும் அலமாரிகள்','Wooden paneling and furniture':'மர பேனலிங் மற்றும் மரச்சாமான்கள்','Wall decor and lighting':'சுவர் அலங்காரம் மற்றும் விளக்குகள்',
'Smart, durable kitchens built around the way you cook.':'நீங்கள் சமைக்கும் முறைக்கு ஏற்ப அமைக்கப்படும் நவீன, உறுதியான சமையலறைகள்.','L-shape, U-shape and island layouts':'L, U வடிவம் மற்றும் ஐலேண்ட் அமைப்புகள்','Soft-close cabinets and tall units':'சாஃப்ட்-க்ளோஸ் கேபினெட் மற்றும் டால் யூனிட்','Countertop, chimney and hob fitting':'கவுண்டர்டாப், சிம்னி, ஹாப் பொருத்துதல்',
'Elegant ceilings with hidden lighting that lift any room.':'எந்த அறையையும் அழகாக்கும் மறைவு விளக்குகளுடன் நேர்த்தியான சீலிங்.','Gypsum and POP ceilings':'ஜிப்சம் மற்றும் POP சீலிங்','Cove and profile lighting':'கோவ் மற்றும் புரொஃபைல் விளக்குகள்','Designer ceilings for hall and bedroom':'ஹால், படுக்கையறைக்கு டிசைனர் சீலிங்',
'See the difference':'வித்தியாசத்தைப் பாருங்கள்','Drag the slider, or tap a button to see the full photo.':'ஸ்லைடரை இழுக்கவும், அல்லது பட்டனைத் தட்டி முழு படத்தைப் பாருங்கள்.','Before':'முன்','After':'பின்','Compare':'ஒப்பிடு',
'Our recent work':'எங்கள் சமீபத்திய வேலைகள்','Real rooms, real finishes. Tap any photo to view it larger.':'உண்மையான அறைகள், உண்மையான பூச்சு. எந்த படத்தையும் தட்டி பெரிதாகப் பாருங்கள்.','All':'அனைத்தும்',
'Why families call us again':'குடும்பங்கள் மீண்டும் எங்களை அழைப்பது ஏன்','One point of contact':'ஒரே தொடர்பு நபர்','One call covers every trade. No coordination headaches for you.':'ஒரு அழைப்பே எல்லா வேலைகளுக்கும். ஒருங்கிணைப்பு தலைவலி உங்களுக்கு இல்லை.','Clear pricing':'தெளிவான விலை','Free site visit and a written quote before any work begins.':'வேலை தொடங்கும் முன் இலவச தள பார்வை மற்றும் எழுத்துப்பூர்வ விலைப்புள்ளி.','On-time finish':'நேரத்தில் முடிவு','We agree a date and keep it, and we clean up when done.':'தேதியை ஒப்புக்கொண்டு காப்பாற்றுவோம், முடிந்ததும் சுத்தம் செய்வோம்.','Skilled workers':'திறமையான பணியாளர்கள்','Trained painters, electricians, plumbers and tile masons.':'பயிற்சி பெற்ற பெயிண்டர்கள், எலக்ட்ரீஷியன்கள், பிளம்பர்கள், டைல்ஸ் மேஸ்திரிகள்.',
'How it works':'எப்படி வேலை செய்கிறோம்','Call us':'எங்களை அழையுங்கள்','Tell us what you need.':'உங்கள் தேவையைச் சொல்லுங்கள்.','Site visit':'தள பார்வை','We measure and check, free.':'இலவசமாக அளந்து பார்ப்போம்.','Fixed quote':'நிலையான விலைப்புள்ளி','You approve the price and date.':'விலையையும் தேதியையும் நீங்கள் உறுதிசெய்யுங்கள்.','Work done':'வேலை முடிவு','We finish and hand over a clean home.':'வேலை முடித்து சுத்தமான வீட்டை ஒப்படைப்போம்.',
'What customers say':'வாடிக்கையாளர்கள் கூறுவது','Areas we serve':'நாங்கள் சேவை செய்யும் பகுதிகள்',
'Ready to start? Your site visit is free.':'தொடங்கத் தயாரா? உங்கள் தள பார்வை இலவசம்.','Book a visit':'பார்வை முன்பதிவு',
'Common questions':'அடிக்கடி கேட்கப்படும் கேள்விகள்',
'Is the site visit really free?':'தள பார்வை உண்மையிலேயே இலவசமா?','Yes. We visit, take measurements and give you a quote at no charge.':'ஆம். நாங்கள் வந்து அளவெடுத்து கட்டணமின்றி விலைப்புள்ளி தருவோம்.',
'Can you handle several works in one go?':'பல வேலைகளை ஒரே நேரத்தில் செய்ய முடியுமா?','Yes. Painting, tiles, plumbing and electrical can be planned together so the work finishes sooner.':'ஆம். பெயிண்டிங், டைல்ஸ், பிளம்பிங், எலக்ட்ரிக்கல் ஒன்றாகத் திட்டமிடப்படுவதால் வேலை விரைவாக முடியும்.',
'Do you do complete interiors and modular kitchens?':'முழு இன்டீரியர் மற்றும் மாடுலர் கிச்சன் செய்வீர்களா?','Yes. We design, build and install interior work, modular kitchens and false ceilings along with painting, electrical and plumbing, so one team handles everything.':'ஆம். இன்டீரியர், மாடுலர் கிச்சன், ஃபால்ஸ் சீலிங்குடன் பெயிண்டிங், எலக்ட்ரிக்கல், பிளம்பிங்கையும் வடிவமைத்து அமைக்கிறோம்; எல்லாவற்றையும் ஒரே குழு பார்த்துக்கொள்ளும்.',
'Which areas do you serve?':'எந்தெந்த பகுதிகளில் சேவை செய்கிறீர்கள்?','Call us with your location and we will confirm.':'உங்கள் இடத்தைச் சொல்லி அழையுங்கள், உறுதிசெய்வோம்.',
'How do I get a quote?':'விலைப்புள்ளி எப்படிப் பெறுவது?','Fill the form below or call 8682929419. We reply the same day.':'கீழே உள்ள படிவத்தை நிரப்பவும் அல்லது 8682929419 அழைக்கவும். அதே நாளில் பதிலளிப்போம்.',
'Tell us what needs fixing':'என்ன சரிசெய்ய வேண்டும் என்று சொல்லுங்கள்','Send the details and we will reply on WhatsApp with a time for the site visit.':'விவரங்களை அனுப்புங்கள், தள பார்வைக்கான நேரத்தை வாட்ஸ்அப்பில் தெரிவிப்போம்.','Call anytime during working hours':'வேலை நேரத்தில் எப்போது வேண்டுமானாலும் அழையுங்கள்',
'Your name':'உங்கள் பெயர்','Phone number':'தொலைபேசி எண்','Service needed':'தேவையான சேவை','Details':'விவரங்கள்','Area, room size, what needs to be done':'இடம், அறை அளவு, செய்ய வேண்டிய வேலை','More than one':'ஒன்றுக்கு மேற்பட்டவை','Send on WhatsApp':'வாட்ஸ்அப்பில் அனுப்பு',
'Jamuna’s All In One Home Renovation. Painting · Electrical · Plumbing · Renovation · Tiles · Interior Work · Modular Kitchen · False Ceiling':'ஜமுனாஸ் ஆல் இன் ஒன் ஹோம் ரெனோவேஷன். பெயிண்டிங் · எலக்ட்ரிக்கல் · பிளம்பிங் · புதுப்பித்தல் · டைல்ஸ் · இன்டீரியர் · மாடுலர் கிச்சன் · ஃபால்ஸ் சீலிங்',
/* new sections */
'Instagram':'இன்ஸ்டாகிராம்','Facebook':'பேஸ்புக்',
'Follow us on Instagram':'இன்ஸ்டாகிராமில் எங்களைப் பின்தொடருங்கள்','Daily project updates, finished rooms and behind-the-scenes from our sites.':'தினசரி வேலை அப்டேட்கள், முடிந்த அறைகள் மற்றும் எங்கள் தளங்களின் திரைக்குப் பின் காட்சிகள்.','Follow':'பின்தொடர்','Like us on Facebook':'பேஸ்புக்கில் லைக் செய்யுங்கள்','View on Instagram':'இன்ஸ்டாகிராமில் பார்க்க',
'Visit us':'எங்களைச் சந்தியுங்கள்','Find us on the map':'வரைபடத்தில் எங்களைக் கண்டுபிடியுங்கள்','Tap the map to explore, or open directions on your phone.':'வரைபடத்தைத் தொட்டு பாருங்கள், அல்லது உங்கள் போனில் வழிகாட்டுதலைத் திறக்கவும்.','Get directions':'வழி காட்டு',
'TITLE':'ஜமுனாஸ் ஆல் இன் ஒன் ஹோம் ரெனோவேஷன் | பெயிண்டிங், இன்டீரியர், மாடுலர் கிச்சன், ஃபால்ஸ் சீலிங்'
};

/* ---------- styles ---------- */
const st=document.createElement('style');
st.textContent=`
.soc{position:fixed;left:0;top:50%;transform:translateY(-50%);z-index:60;display:grid;gap:10px}
.soc a{display:flex;align-items:center;gap:12px;width:50px;height:50px;padding-left:13px;border-radius:0 16px 16px 0;color:#fff;font-weight:600;font-size:14px;white-space:nowrap;overflow:hidden;box-shadow:0 10px 24px -8px rgba(0,0,0,.5);transition:width .3s cubic-bezier(.2,.8,.2,1);animation:socin .7s cubic-bezier(.2,.8,.2,1) both}
.soc a:nth-child(2){animation-delay:.15s}
.soc a:hover,.soc a:focus-visible{width:150px}
.soc svg{flex:none}
.soc .ig{background:linear-gradient(45deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)}
.soc .fb{background:#1877f2}
@keyframes socin{from{transform:translateX(-100%)}}
.lang{font:inherit;font-weight:600;font-size:14px;padding:8px 16px;border-radius:99px;border:1.5px solid var(--navy);background:#fff;color:var(--navy);cursor:pointer;transition:all .2s}
.lang:hover{background:var(--navy);color:#fff}
.igs{background:#fff}
.igcard{display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap;margin:34px 0 28px;padding:22px 26px;border-radius:var(--r);background:var(--bg);border:1px solid #e4e8f5}
.igp{display:flex;align-items:center;gap:16px}
.igr{width:76px;height:76px;border-radius:50%;padding:3px;background:linear-gradient(45deg,#f09433,#dc2743,#bc1888);display:grid;place-items:center;flex:none}
.igr img{width:100%;height:100%;border-radius:50%;background:#fff;object-fit:contain;padding:6px;border:3px solid #fff}
.igp strong{font-family:'Bricolage Grotesque';font-size:22px;display:block}
.igb{display:flex;gap:12px;flex-wrap:wrap}
.btn-ig{background:linear-gradient(45deg,#f09433,#dc2743,#bc1888);color:#fff}
.btn-fb{background:#1877f2;color:#fff}
.iggrid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
.igt{position:relative;aspect-ratio:1;border-radius:20px;overflow:hidden;background:linear-gradient(135deg,#dc2743,#f09433);display:block}
.igt img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .6s}
.igt:hover img{transform:scale(1.1)}
.igo{position:absolute;inset:0;display:grid;place-content:center;justify-items:center;gap:8px;background:linear-gradient(45deg,rgba(220,39,67,.8),rgba(188,24,136,.8));color:#fff;font-weight:600;opacity:0;transition:opacity .3s}
.igt:hover .igo,.igt:focus-visible .igo{opacity:1}
.mps .wrap{display:grid;grid-template-columns:.8fr 1.2fr;gap:50px;align-items:center}
.mpf{border-radius:var(--r);overflow:hidden;box-shadow:0 24px 50px -26px rgba(13,33,89,.7);border:6px solid #fff;line-height:0}
.mpf iframe{width:100%;height:400px;border:0}
.mps .btn{margin-top:24px}
.fin{opacity:0;transform:translateY(40px);transition:opacity .8s,transform .8s cubic-bezier(.2,.8,.2,1)}
.fin.in{opacity:1;transform:none}
html[lang=ta] body,html[lang=ta] .btn,html[lang=ta] .lang,html[lang=ta] input,html[lang=ta] select,html[lang=ta] textarea{font-family:'Noto Sans Tamil','Plus Jakarta Sans',system-ui,sans-serif}
html[lang=ta] h1,html[lang=ta] h2,html[lang=ta] h3{font-family:'Noto Sans Tamil',sans-serif;letter-spacing:0;line-height:1.3}
html[lang=ta] .hero h1{font-size:clamp(34px,5vw,58px)}
@media(max-width:860px){.mps .wrap{grid-template-columns:1fr}.iggrid{grid-template-columns:repeat(2,1fr);gap:10px}.soc a{width:42px;height:42px;padding-left:10px}.lang{padding:7px 12px}.mpf iframe{height:320px}}
@media(prefers-reduced-motion:reduce){.soc a{animation:none}}`;
document.head.appendChild(st);
const fl=document.createElement('link');fl.rel='stylesheet';fl.href='https://fonts.googleapis.com/css2?family=Noto+Sans+Tamil:wght@400;500;600;700&display=swap';document.head.appendChild(fl);

/* ---------- social side bar ---------- */
document.body.insertAdjacentHTML('beforeend',`<aside class="soc" aria-label="Social media">
<a class="ig" href="${CFG.IG_URL}" target="_blank" rel="noopener" aria-label="Instagram">${IGI}<span>Instagram</span></a>
<a class="fb" href="${CFG.FB_URL}" target="_blank" rel="noopener" aria-label="Facebook">${FBI}<span>Facebook</span></a></aside>`);

/* ---------- Instagram section (before the orange banner) ---------- */
let tiles='';
for(let i=1;i<=6;i++)tiles+=`<a class="igt fin" href="${CFG.IG_URL}" target="_blank" rel="noopener" aria-label="Instagram post ${i}"><img src="images/ig${i}.jpg" alt="" loading="lazy" data-n="${i}"><span class="igo">${IGI.replace('width="24" height="24"','width="34" height="34"')}<span>View on Instagram</span></span></a>`;
const ig=document.createElement('section');ig.className='igs';ig.id='instagram';
ig.innerHTML=`<div class="wrap"><h2>Follow us on Instagram</h2><p class="lead">Daily project updates, finished rooms and behind-the-scenes from our sites.</p>
<div class="igcard fin"><div class="igp"><span class="igr"><img src="images/logo.png" alt=""></span><div><strong>${CFG.IG_HANDLE}</strong><span style="color:var(--muted);font-size:14px">Jamuna’s All In One</span></div></div>
<div class="igb"><a class="btn btn-ig" href="${CFG.IG_URL}" target="_blank" rel="noopener">Follow</a><a class="btn btn-fb" href="${CFG.FB_URL}" target="_blank" rel="noopener">Like us on Facebook</a></div></div>
<div class="iggrid">${tiles}</div></div>`;
const bs=document.querySelector('.banner').closest('section');bs.parentNode.insertBefore(ig,bs);
ig.querySelectorAll('.igt img').forEach(im=>im.onerror=function(){if(!this.dataset.f){this.dataset.f=1;this.src='images/g'+this.dataset.n+'.jpg'}else this.remove()});

/* ---------- Google Map (before contact) ---------- */
const mp=document.createElement('section');mp.className='mps';mp.id='location';
mp.innerHTML=`<div class="wrap"><div><h2>Find us on the map</h2><p class="lead">Tap the map to explore, or open directions on your phone.</p>
<a class="btn btn-o" href="https://www.google.com/maps/dir/?api=1&destination=${enc(CFG.MAP_QUERY)}" target="_blank" rel="noopener">Get directions</a></div>
<div class="mpf fin"><iframe title="Map" loading="lazy" referrerpolicy="no-referrer-when-downgrade" allowfullscreen src="https://www.google.com/maps?q=${enc(CFG.MAP_QUERY)}&output=embed"></iframe></div></div>`;
g('contact').parentNode.insertBefore(mp,g('contact'));
const fio=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){fio.unobserve(e.target);e.target.classList.add('in')}}),{threshold:.12});
document.querySelectorAll('.fin').forEach((el,i)=>{el.style.transitionDelay=(i%3)*.1+'s';fio.observe(el)});

/* ---------- gallery filter must not depend on translated text ---------- */
const tabs=g('tabs'),gal=g('gal');
[...tabs.children].forEach(b=>b.dataset.k=b.textContent);
[...gal.children].forEach(d=>d.dataset.k=d.dataset.c);
tabs.onclick=e=>{const b=e.target.closest('button');if(!b)return;[...tabs.children].forEach(x=>x.classList.toggle('on',x==b));[...gal.children].forEach(d=>d.hidden=b.dataset.k!='All'&&d.dataset.k!=b.dataset.k)};
document.querySelectorAll('#f option').forEach(o=>o.value=o.textContent); // WhatsApp message stays English

/* ---------- language toggle ---------- */
let lang='en';try{lang=localStorage.getItem('lang')||'en'}catch(e){}
const orig=new WeakMap(),origT=document.title;
const btn=document.createElement('button');btn.className='lang';btn.type='button';
const links=document.querySelector('.links');links.insertBefore(btn,links.lastElementChild);
/* mobile: language button sits in the header bar (outside the menu); desktop: inside the links */
const navWrap=document.querySelector('nav .wrap'),menuTg=document.querySelector('.menu-toggle'),mqM=window.matchMedia('(max-width:860px)');
function placeLang(){if(mqM.matches&&menuTg){navWrap.insertBefore(btn,menuTg)}else{links.insertBefore(btn,links.lastElementChild)}}
placeLang();(mqM.addEventListener?mqM.addEventListener('change',placeLang):mqM.addListener(placeLang));
function tr(n){
 if(n.nodeType===3){const t=n.data.trim();if(!t)return;
  if(lang==='ta'){const v=TA[t];if(v){if(!orig.has(n))orig.set(n,n.data);n.data=n.data.replace(t,()=>v)}}
  else if(orig.has(n)){n.data=orig.get(n);orig.delete(n)}
 }else if(n.nodeType===1){
  if(n.tagName==='SCRIPT'||n.tagName==='STYLE')return;
  ['placeholder','data-c'].forEach(a=>{if(!n.hasAttribute(a))return;n._o=n._o||{};
   if(lang==='ta'){const k=n._o[a]??n.getAttribute(a),v=TA[k];if(v){n._o[a]=k;n.setAttribute(a,v)}}
   else if(n._o[a]!=null)n.setAttribute(a,n._o[a])});
  n.childNodes.forEach(tr)}
}
function apply(){
 document.documentElement.lang=lang;
 btn.textContent=lang==='ta'?'English':'தமிழ்';
 btn.setAttribute('aria-label',lang==='ta'?'Switch to English':'தமிழுக்கு மாற்று');
 document.title=lang==='ta'?TA.TITLE:origT;
 tr(document.body);
}
btn.onclick=()=>{lang=lang==='ta'?'en':'ta';try{localStorage.setItem('lang',lang)}catch(e){}apply()};
new MutationObserver(ms=>{if(lang!=='ta')return;ms.forEach(m=>{m.addedNodes.forEach(tr);if(m.type==='characterData')tr(m.target)})}).observe(document.body,{childList:true,subtree:true,characterData:true});
apply();
})();
