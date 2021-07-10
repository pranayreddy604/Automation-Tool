const puppeteer = require('puppeteer');
const cred=require("./cred.json");
const date=require("./date")
require('dns').resolve("www.google.com",(err)=>{
  if(err){
    console.log("no connection");
  }
  else{
    console.log(date.curr_date.d_and_t);
    console.log("connected");
    work();
  }
})
async function work() {

  const browser = await puppeteer.launch(
    {
      headless:false,
      timeout:100000,
      defaultViewport: null,
     executablePath:'C:/Program Files/BraveSoftware/Brave-Browser/Application/brave.exe'
    }
    );
  const page = await browser.newPage();
  await page.goto('https://login.gitam.edu/Login.aspx',{timeout:100000});
  await page.waitForSelector(".col-xs-12 #txtusername");
  await page.waitForSelector(" #password");
  await page.waitForSelector(".col-md-12 #Submit");
  await page.type("#txtusername",cred.username);
  await page.type("#password",cred.password);
  await page.click("#Submit");
  await page.waitForSelector(".g-portals",{timeout:100000})
  const link=await page.evaluate(()=>{
    return document.querySelectorAll(".g-portals li a")[0].href;
  });
  await page.goto(link,{timeout:100000});
  console.log("done1");
  await page.waitForSelector("#ContentPlaceHolder1_GridViewonline",{timeout:100000});
  console.log("done2");

  
  // else{
  //   for(let i=0;i<arr_of_dates_address.len;i++){
  //     console.log(arr_of_dates_address.arr_of_address[i]);
  //   }
  // }
  joinClass(page);
  // browser.close()
};
async function classList(page){
  let arr_of_dates_address=await page.evaluate(()=>{
    let arr_of_dates= new Array(),arr_of_address=new Array(),len
    let str=document.querySelectorAll("#ContentPlaceHolder1_GridViewonline tbody tr td a .main_li")
    let address=document.querySelectorAll("#ContentPlaceHolder1_GridViewonline tbody tr td a")
    len=str.length;
    for (let i = 0; i < len; i++) {
      arr_of_dates.push(str[i].querySelector("h6").innerText.substr(0,29))    
      arr_of_address.push(address[i].href.substring(24,35));
    }
    
    return {arr_of_dates,arr_of_address,len};
  })
  console.log(arr_of_dates_address.arr_of_dates[0]);
  return arr_of_dates_address;
}
async function joinClass(page){
  
  let dates_addr=await classList(page);  
  // for(let i=0;i<dates_addr.len;i++){
  //       console.log(dates_addr.arr_of_address[i]);
  //     }
  let curr_hour=date.curr_date.curr_hour;
  console.log(curr_hour)
  
}

