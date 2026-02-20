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
const wrapper= document.querySelectorAll('.wrapper')
allList.forEach(item=>{
    item.addEventListener('click',()=>{
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






















// 歌曲
function getSong(keywords){
    return fetch(`http://localhost:3000/search?keywords=${keywords}`)
    .then(res=>res.json())
    .then(res=>localStorage.setItem(`${keywords}`,JSON.stringify(res)))
    .catch(err=>{
    console.error(err);
    });
}
const song='海阔天空'
getSong(song)
.then(()=>{
console.log(localStorage.getItem('海阔天空'))
})
async function playSong(songId) {
  try {
    const res = await fetch(`http://localhost:3000/song/url?id=${songId}`);
    const data = await res.json();

    // 检查 data 数组是否存在且不为空
    if (data.data && data.data.length > 0) {
      const playUrl = data.data[0].url;
      if (playUrl) {
        const audio = new Audio(playUrl);
        

        audio.play();
        console.log('正在播放:', playUrl);
      } else {
        console.log('无播放链接');
      }
    } 
  } catch (err) {
    console.error('播放失败:', err);
  }
}
const text = document.querySelector('.slider .slider_container:nth-child(1)')
text.addEventListener('click',()=>{
    playSong(1357375695)
})
async function getPlayUrl(songId) {
  try {
    const res = await fetch(`http://localhost:3000/song/url?id=${songId}`);
    const data = await res.json();
    console.log('播放链接:', data);
    return data;
  } catch (err) {
    console.error('获取播放链接失败:', err);
  }
}


























