// var face_x,face_y,face_size
var face_x = [] 
var face_y = []
var face_size = []
var face_num = 1

var song
var songIsplay=false //設定此變數為'假'(false)，收到按下滑鼠把變數改為"真"(true)
var amp
var vol
function preload(){
  song = loadSound("WOODZ (I hate you) MV.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)
  // face_size = 400
  // face_x = width/2
  // face_y = height/2

  for(var i=0;i<face_num;i++){
    face_size[i] = 400  //臉的大小100~400
    face_x[i] = width/2
    face_y[i] = height/2
  }

  // for(var i=0;i<face_num;i++){
  //   face_size[i] = random(100,400)  //臉的大小100~400
  //   face_x[i] = random(0,width)
  //   face_y[i] = random(0,height)
  // }
}

function draw() {
  background(220);
  textSize(50)
  text("X:"+mouseX+"  Y:"+mouseY,50,50)
  for(var j=0;j<face_num;j++){
    push()  
      // fill(255,0,0)
      var f_s = face_size[j]
      translate(face_x[j],face_y[j]) //把(0,0)座標原點移到視窗的中間
      fill("#52796f")
      noStroke()
      triangle(f_s/3,f_s/3,f_s/3, f_s/2100, f_s/2*2, f_s/1.5); //尾巴

      fill('#ae2012')
      // fill(random(253),random(50)+10,random(50)+50)
      ellipse(f_s/5,-f_s/2.3,f_s/5,f_s/5)//鱗片
      ellipse(f_s/3.5,-f_s/2.9,f_s/5,f_s/5)
      ellipse(f_s/2.9,-f_s/3.7,f_s/5,f_s/5)
      ellipse(f_s/2.6,-f_s/4.7,f_s/5,f_s/5)
      ellipse(f_s/2.6,-f_s/15,f_s/5,f_s/5)
      ellipse(f_s/2.6,-f_s/30,f_s/5,f_s/5)
      ellipse(f_s/2.6,-f_s/55,f_s/5,f_s/5)
      ellipse(f_s/2.6,f_s/15.4,f_s/5,f_s/5)
      
      
      fill('#2a9d8f')
      // fill(random(153),random(50)+100,random(50))
      ellipse(0,0,f_s/1.1,f_s)  //臉
      ellipse(f_s/13,-f_s/2.2,f_s/5,f_s/4)//高眼睛
      ellipse(-f_s/13,-f_s/2.2,f_s/5,f_s/4)//高眼睛
     

      fill(0)
      ellipse(-f_s/13,-f_s/2.7,f_s/25,f_s/50)//鼻孔
      ellipse(f_s/13,-f_s/2.7,f_s/25,f_s/50)//鼻孔
      fill("#aacc00")
      // arc(f_s/12.5,-f_s/2.77,f_s/70,f_s/7,0,180)//鼻涕
      
      fill(255)
      ellipse(-f_s/12,-f_s/2.1,f_s/10)//眼眶
      fill(0)
      ellipse(-f_s/9+map(mouseX,0,width,-f_s/10000,f_s/20),-f_s/2+map(mouseY,0,height,-f_s/10000,f_s/20),f_s/30)//眼睛

      noFill()
      
      fill(255)
      ellipse(f_s/12,-f_s/2.1,f_s/10)//眼眶
      fill(0)
      ellipse(f_s/15+map(mouseX,0,width,-f_s/10000,f_s/20),-f_s/2+map(mouseY,0,height,-f_s/10000,f_s/20),f_s/30)//眼睛

      
      // fill('#2a9d8f')
      // ellipse(f_s/5,f_s/2.5,150,200)
      // ellipse(f_s/3.5,f_s/1.7,150,75)



      // fill(255,0,0)
      // arc(0,-f_s/4,f_s/2,f_s/4,0,180)  //下弧
      fill(255)

      if(!songIsplay){
        fill(255,0,0)
        arc(0,-f_s/4-1,f_s/2,f_s/4-10,0,180) //嘴巴
        fill("#aacc00")
        arc(f_s/12.5,-f_s/2.77,f_s/70,f_s/7,0,180)//鼻涕
        fill('#2a9d8f')
        ellipse(f_s/5,f_s/2.5,f_s/3,f_s/2)//右腿
        ellipse(f_s/3.5,f_s/1.7,f_s/2.5,f_s/5)//右腳
        ellipse(-f_s/5,f_s/2.5,f_s/3,f_s/2)//左腿
        ellipse(-f_s/3.5,f_s/1.7,f_s/2.5,f_s/5)//左腳
        fill("#52796f")
        ellipse(f_s/2,f_s/50,f_s/2.5,f_s/6)//右手臂
        ellipse(f_s/1.5,f_s/50,f_s/6,f_s/6)//右手掌
        ellipse(-f_s/2,f_s/50,f_s/2.5,f_s/6)//左手臂
        ellipse(-f_s/1.5,f_s/50,f_s/6,f_s/6)//左手掌

        fill("#94d2bd")
       ellipse(0,f_s/5,f_s/3,f_s/3)//肚子印記

      }
      else{
        vol = amp.getLevel() //取得聲音值(值為0~1之間)
        // console.log(vol)
        fill(255,0,0)
        arc(0,-f_s/4-1,f_s/2,map(vol,0,0.5,f_s/5,f_s/1.2),0,180)//嘴巴
        fill("#aacc00")
        arc(f_s/12.5,-f_s/2.77,f_s/70,map(vol,0,0.5,f_s/5,f_s/3),0,180)//鼻涕
        fill('#2a9d8f')
        ellipse(f_s/5,f_s/2.5,f_s/3,f_s/2+map(vol,0,0.5,f_s/5,f_s/7))//右腿
        ellipse(f_s/3.5,f_s/2+map(vol,0,0.5,f_s/5,f_s/7),f_s/2.5,f_s/5)//右腳
        ellipse(-f_s/5,f_s/2.5,f_s/3,f_s/2+map(vol,0,0.5,f_s/5,f_s/7))//左腿
        ellipse(-f_s/3.5,f_s/2+map(vol,0,0.5,f_s/5,f_s/7),f_s/2.5,f_s/5)//左腳
        fill("#52796f")
        ellipse(f_s/2,f_s/50,f_s/5.5+map(vol,0,0.5,f_s/5,f_s/7),f_s/6)//右手臂
        ellipse(f_s/2+map(vol,0,0.5,f_s/5,f_s/7),f_s/50,f_s/6,f_s/6)//右手掌
        ellipse(-f_s/2,f_s/50,f_s/5.5+map(vol,0,0.5,f_s/5,f_s/7),f_s/6)//左手臂
        ellipse(-f_s/2-map(vol,0,0.5,f_s/5,f_s/7),f_s/50,f_s/6,f_s/6)//左手掌

        fill("#94d2bd")
       ellipse(0,f_s/5,f_s/3,f_s/3)//肚子印記

       fill(255,0,0)
       arc(0,-f_s/4-1,f_s/2,map(vol,0,0.5,f_s/5,f_s/1.2),0,180)//嘴巴
       fill("#aacc00")
       arc(f_s/12.5,-f_s/2.77,f_s/70,map(vol,0,0.5,f_s/5,f_s/3),0,180)//鼻涕
      
      }
      
      noFill()

      

      pop()
    }
  }


  function mousePressed()
{
  if(!songIsplay){
    song.play()
    songIsplay = true
    amp=new p5.Amplitude()

  }
  else{
    song.pause()
    songIsplay = false

  }
  
}
  