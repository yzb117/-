let width=Math.min(document.body.clientWidth,1530);
   let fontsize=(width/1530)*100
   document.documentElement.style.fontSize=fontsize+"px"
   
// 侧导航更多和收起
const openList =document.querySelector('.myInfo .openList');
const ListContent=document.querySelectorAll('.myInfo >:nth-child(n+5):nth-child(-n+9)');
const closeList = document.querySelector('.myInfo .closeList')
openList.addEventListener('click',(e)=>{
    e.preventDefault();
    ListContent.forEach(item=>{
        item.style.display='flex'
    });
    openList.style.display='none';
})
closeList.addEventListener('click',(e)=>{
    e.preventDefault();
    ListContent.forEach(item=>{
        item.style.display='none'
    });
    openList.style.display='flex';
})
// 侧导航的选中红
const allList=document.querySelectorAll('.menu>:nth-child(n+1):nth-child(-n+5),.myInfo>:nth-child(n+1):nth-child(-n+3),.myInfo>:nth-child(n+5):nth-child(-n+8)');

allList.forEach(item=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault;
        allList.forEach(item=>{
            item.classList.remove('active');
            item.style
        });
        
        item.classList.add('active');
    })
})
// 搜索框
const search=document.querySelector('.header_search')
const search_nav=document.querySelector('.search_nav')
search.addEventListener('click',()=>{
    search_nav.style.display='block'
})
search_nav.addEventListener('mouseleave',()=>{
    search_nav.style.display='none'
})

// 歌单footer变化
const slider_container = document.querySelectorAll('.wrapper .slider .slider_container');
slider_container.forEach(item=>{
    
    item.addEventListener('mouseenter',()=>{
        const footer = item.querySelector('.slider_footer');
        footer.style.height='1.2rem';
        footer.style.setProperty('box-shadow','0 -0.7rem 0.3rem 0 rgba(106, 102, 102, 0.7)');
    })
})
slider_container.forEach(item=>{
    item.addEventListener('mouseleave',()=>{
        footer = item.querySelector('.slider_footer');
        footer.style.height='0.5rem';
        footer.style.boxShadow = 'none'
    })
})
// 轮播图滑动
const container1 = document.querySelector('.activity_slider .container:nth-child(2)');
const container2 = document.querySelector('.activity_slider .container:nth-child(3)');
container1.style.setProperty('left',0);
function moveLeft(item){
    return new Promise((resolve)=>{
        item.style.setProperty('transition','transform 1s ease')
        item.style.setProperty('transform','translateX(-12.5rem)');
        setTimeout(()=>{
            resolve();
        },1000)
    })
}
function move_container1(){
    moveLeft(container1)
    .then(()=>{
        // return new Promise(resolve=>{
            // setTimeout(()=>{
        container1.style.transition='none';
        container1.style.transform='translateX(12.5rem)'
        // resolve();
                // },1000)
        // })
    })
    setTimeout(()=>{
        container1.style.transition='transform 1s ease';
        container1.style.transform='translateX(0)'
    },3500)
}
move_container1();
setInterval(() => {
    move_container1();
}, 7000);
function move_container2(){
    moveLeft(container2)
    .then( ()=>{
        return new Promise((resolve)=>{
             
            setTimeout(()=>{
                container2.style.transition='transform 1s ease';
                container2.style.transform='translateX(-25rem)';
                resolve();
            },2500)
        })
       
         
    })
    .then(()=>{
        return new Promise((resolve)=>{
             
            setTimeout(()=>{
                container2.style.transition='none';
                container2.style.transform='translateX(0)';
                resolve();
            },1000)
        })
    
    })
};
move_container2();
setInterval(() => {
    move_container2();
}, 7000);
// 图片循环
const obj = [
    {URL:'./网易云img/轮播图 (1).png'},
    {URL:'./网易云img/轮播图 (2).png'},
    {URL:'./网易云img/轮播图 (3).png'},
    {URL:'./网易云img/轮播图 (4).png'},
    {URL:'./网易云img/轮播图 (5).png'},
    {URL:'./网易云img/轮播图 (6).png'},
    {URL:'./网易云img/轮播图 (7).png'},
    {URL:'./网易云img/轮播图 (8).png'},
    {URL:'./网易云img/轮播图 (9).png'}
]
const img1 = container1.querySelectorAll('img');
const img2 = container2.querySelectorAll('img');
function imgChange1(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            let i=0;
            for(i=0;i<4;i++)
            {
                let n= +img1[i].dataset.num;
                img1[i].dataset.num=n+8>8?n-1:n+8;
                img1[i].src=obj[+img1[i].dataset.num].URL;
            }
            resolve();
        }, 2000);
    })
}
function imgChange2(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            let i=0;
            for(i=0;i<4;i++)
            {
                let n= +img2[i].dataset.num;
                
                img2[i].dataset.num=n+8>8?n-1:n+8;
                img2[i].src=obj[+img2[i].dataset.num].URL;
            }
            resolve();
        }, 4500);
    })
}
imgChange1();
imgChange2();
setInterval(()=>{
    imgChange1();
    imgChange2();
},7000)
//分页滑动效果
const indicatorLi=document.querySelectorAll('.slider_indicator li');
function indicatorLeft(){
    const active=document.querySelector('.slider_indicator li.active');
    n=+active.dataset.id
    let i=n===0?4:n-1;
    indicatorLi.forEach(item=>{
        item.classList.remove('active');
    })
    indicatorLi[i].classList.add('active')
}
function indicatorRight(){
    const active=document.querySelector('.slider_indicator li.active');
    n=+active.dataset.id
    let i=n===4?0:n+1;
    indicatorLi.forEach(item=>{
        item.classList.remove('active');
    })
    indicatorLi[i].classList.add('active')
}
indicatorLeft();
setInterval(()=>{
    indicatorLeft()
},3500);
const left = document.querySelector('#left');
const right = document.querySelector('#right');
left.addEventListener('click',()=>{
    indicatorLeft();
    
})
right.addEventListener('click',()=>{
    indicatorRight();
    
})
// 页面跳转
const body = document.querySelector('body')
for(let i= 0;i<10;i++){
    const div = document.createElement('div');
    div.classList.add('wrapper');
    body.append(div);
}

allList.forEach(item=>{
    
    item.addEventListener('click',()=>{
    const wrapper= document.querySelectorAll('.wrapper')
    let n = item.dataset.id;
    wrapper.forEach(item=>{
        item.classList.remove('active');
    })
    wrapper[n].classList.add('active');
    })
})
// 两个nav
const wrapper2_nav=document.querySelectorAll('.wrapper2_nav li')
const wrapper2_nav2=document.querySelectorAll('.wrapper2_nav2 a')
wrapper2_nav.forEach(item=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault;
        wrapper2_nav.forEach(item=>{
            item.classList.remove('active');
            
        });
        
        item.classList.add('active');
    })
})
wrapper2_nav2.forEach(item=>{
    item.addEventListener('click',(e)=>{
        e.preventDefault;
        wrapper2_nav2.forEach(item=>{
            item.classList.remove('active');
           
        });
        
        item.classList.add('active');
    })
})



// 歌单
const songsList = document.querySelectorAll('.wrapper2_slider .single,.wrapper2_slider2 .single')
for(let i= 0;i<13;i++){
    const div = document.createElement('div');
    div.classList.add('wrapper');
    body.append(div);
}
songsList.forEach(item=>{
    
    item.addEventListener('click',()=>{
    const wrapper= document.querySelectorAll('.wrapper')
    let n = item.dataset.id;
    wrapper.forEach(item=>{
        item.classList.remove('active');
    })
    wrapper[n].classList.add('active');
    })
})

const songLists=[
{
    songs:['江南','不流泪的机场','交换余生','关键词','飞云之下','她说','可惜没如果','裹着心的光','醉赤壁','愿与愁','不为谁而作的歌','那些你很冒险的梦']
},
{
    songs:["花海", "晴天", "七里香", "告白气球", "一路向北", "小幸运", "后来", "遇见", "勇气", "演员"]
},
{
    songs:["In The Shadow Of The Sun","Shape of You", "Uptown Funk", "Perfect", "Someone Like You", "Hello", "Dynamite", "Blinding Lights", "Levitating", "Watermelon Sugar", "Dance Monkey"]
},
{
    songs:["River Flows in You", "Kiss the Rain", "Luv Letter", "The Truth That You Leave", "Merry Christmas Mr. Lawrence", "Clair de Lune", "Canon in D", "Air on the G String", "Moon River", "La Vie En Rose"]
},
{
    songs:["泡沫", "光年之外", "来自天堂的魔鬼", "句号", "多远都要在一起", "喜欢你", "倒数", "A.I.N.Y.", "我的秘密", "画"]
},
{
    songs:["消愁", "像我这样的人", "一荤一素", "平凡的一天", "借", "不染", "无问", "水乡", "一程山路", "东北民谣"]
},
{
    songs:["遇见", "天黑黑", "开始懂了", "绿光", "遇见", "我怀念的", "雨天", "逆光", "风筝", "神奇"]
},
{
    songs:["晴天", "七里香", "花海", "告白气球", "一路向北", "夜曲", "青花瓷", "稻香", "以父之名", "珊瑚海"]
},
{
    songs:["倔强", "温柔", "知足", "突然好想你", "恋爱ing", "私奔到月球", "天使", "我不愿让你一个人", "如烟", "干杯"]
},
{
    songs:["十年", "浮夸", "富士山下", "K歌之王", "好久不见", "爱情转移", "红玫瑰", "白玫瑰", "孤独患者", "你的背包"]
},
{
    songs:["红豆", "传奇", "暧昧", "人间", "匆匆那年", "致青春", "因为爱情", "流年", "笑忘书", "梦中人"]
},
{
    songs:["模特", "李白", "年少有为", "戒烟", "老街", "麻雀", "爸爸妈妈", "耳朵", "不将就", "满座"]
}
]
function createSongList(item,n){
    const songList_img=document.createElement('img')
    const songList_p=document.createElement('p');
    const songList_ul= document.createElement('ul');
    songList_img.classList.add('songList_wrapperImg')
    songList_p.classList.add('songList_wrapperP');
    songList_ul.classList.add('songList_wrapperUl');
    const container=document.querySelector(`.single[data-id="${n}"]`)
    songList_img.src=container.querySelector('img').src;
    songList_p.innerHTML=container.querySelector('.footer').innerHTML
    songLists[n-13].songs.forEach((song,index)=>{
        const li = document.createElement('li')
       
        li.innerHTML=index+1
        li.innerHTML+=`<p class="song">${song}</p>`;
        songList_ul.append(li)
    })
    item.append(songList_img)
    item.append(songList_p)
    item.append(songList_ul)
}
const wrapper = document.querySelectorAll('.wrapper')

for(let n=13;n<25;n++)
{
    createSongList(wrapper[n],n)
}

// 歌曲
const audio = new Audio()
async function getSong(keywords) {
    try{ const res = await fetch(`http://localhost:3000/search?keywords=${keywords}`)
    const data = await res.json();
    const song = data.result.songs[0]
    const songId = song.id
    const res2 = await fetch(`http://localhost:3000/song/url?id=${songId}`)
    const data2 = await res2.json();
    if(data2.data&&data2.data.length>0)
    {
        const songUrl = data2.data[0].url
        if(songUrl)
        {
            audio.src=songUrl
            audio.play()
        }else{
            console.log('失败');
            
        }
    }
    }catch(err){
        console.log('error',err);
        
    }
}


async function getSongInfo(keywords) {
    try{
    const res = await fetch(`http://localhost:3000/search?keywords=${keywords}`) 
    
    const data = await res.json();
    // console.log('数据3',data);
    
    const singer =await data.result.songs[0].artists.map(artist=>artist.name).join('/')
    // console.log('歌手',singer)
    const song = data.result.songs[0]
    const songId = song.id;
    const infoRes = await fetch(`http://localhost:3000/song/detail?ids=${songId}`)
    const infoData = await infoRes.json();
    // console.log('数据',infoData);
    const singerpic = infoData.songs[0].al.picUrl
    // const songInfo =infoData.songs[0];
    // const singer= songInfo.ar.map(singer=>singer.name).join('/');
    return {
        picurl:singerpic,
        singer:singer
    }
    }catch{}
}
// 播放&&底部歌单
const singerimg = document.querySelector('.playList img')
const song_Name = document.querySelector('.playList .songinfo p:first-child')
const singerName = document.querySelector('.playList .songinfo p:nth-child(2)')
const songs = document.querySelectorAll('.song')
songs.forEach(item=>{
    item.addEventListener('click',async (e)=>{
        e.preventDefault();
        
        const songName = item.textContent.trim();
        try{
            const song_info = await getSongInfo(songName)
            singerimg.src= song_info.picurl
            song_Name.innerHTML=songName
            singerName.innerHTML=song_info.singer
            audio.pause()
            
            audio.currentTime=0
            await getSong(songName)
        } catch (err){
            console.log('error',err);
            
        }
    })
})
// 暂停
const songstop = document.querySelector('#stop')
songstop.addEventListener('click',(e)=>{
    e.preventDefault();
    if(singerName.innerHTML!='')
    {
        if(songstop.className==='iconfont icon-stop')
        {
            songstop.className='iconfont icon-bofang1'
            audio.pause()
        }else{
            songstop.className='iconfont icon-stop'
            audio.play()
        }
    }
})




































