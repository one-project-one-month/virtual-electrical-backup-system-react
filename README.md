## Virtual Electrical Backup System

> Virtual Electrical Backup System ၏ရည်ရွယ်ချက်မှာ မိမိအိမ်အတွက် လိုအပ်သော Electrical backup item များဝယ်ယူရာတွင် မိမိအိမ်၏ လျှပ်စစ်ပစ္စည်းများနှင့် အဆင်ပြေမည့် ပစ္စည်းများအားရွေးချယ် ဝယ်ယူနိုင်ရန်ဖြစ်သည်။

 ---------------------------------

Tech Stack

>Frontend: React, TypeScript, Zustand, React-Query, TailwindCss, Shadcn, zod

>Backend: Nodejs, Express, MongoDb

---------------------------------

ပါ၀င်တဲ့ Collection တွေကတော့
1.PowerStation
2.Inverter
3.Battery
4.Generator
5.Solar
6.Brand
7.Device

---
## Contributors

---

**Description**

Virtual Eletrical Backup System ဟာ ဆန်းသစ်ပြီးပျော်ဖို့ကောင်းတဲ့ project တစ်ခုဖြစ်ပါတယ်။ Calculation အတွက် data အသေးစိတ်အား အတတ်နိုင်ဆုံးယူကာ calculate လုပ်ထားသည့်အတွက် သုံးရလွယ်ကူပြီး အနီးစပ်ဆုံးတူတဲ့ virtual result ကိုထုတ်ပေးနိုင်ပါတယ်။ လူကြီးမင်းတို့ အိမ် အတွက် လိုအပ်သည့် backup item များဝယ်ယူရာတွင် များစွာ အထောက်ကူဖြစ်နိုင်ပြီး လိုအပ်မည့်ပစ္စည်းများအား တိုက်ရိုက် ဝယ်နိုင်အောင် Store တစ်ခုကဲ့သို့ အလုပ်လုပ်သည့် အတွက် အချိန်ကုန်လည်း သက်သာပါသည်။


### PowerStation
>  All in one powestation အားသွင်းကြာချိန်နှင့် အသုံးပြုနိုင်ချိန်တို့ အား သုံးမည့် Device ပေါ်မူတည်ကာ calculate လုပ်ပေးနိင်ရန်

### Invertor
>  Battery နှင့် အသုံးပြုမည့် Device(loads) များကြား ဆက်သွယ်ပေးရန်, convert DC to AC, မီးပျက်သွားလျှင် grid မှ battery သို့ ချက်ချင်း ပြောင်းချိတ်ပေးရန်

### Battery 
>  main grid ကျသွားလျှင် main power source အဖြစ်အလုပ်လုပ်နိုင်ပြီး charging time, usage time အား တွက်ပေးရန်

### Generator
>  main grid ကျသွားလျှင် main power source အဖြစ်အလုပ်လုပ်နိုင်&ရန်

### Solar
>  power station နှင့် battery အားသွင်းပေးရန် charging time တွက်ပေးရန်

### Device
> device(loads) ပေါ်မူတည် ပြီး လိုအပ်မည့် items ကို တွက် ပေးရန်

### Battery Type
> Battery ၏ ထိရောက်မှု၊ သက်တမ်းနှင့် Inverter နှင့် Devices များနှင့် ကိုက်ညီမှုအား သတ်မှတ်ပြီး အကောင်းဆုံးစွမ်းဆောင်ရည်ကို တွက်ချက်ပေးရန်

### Inverter Type
> Output waveform အမျိုးအစား (Pure sine wave, Modified sine wave) နှင့် ထိရောက်မှုကို သတ်မှတ်ပြီး Devices များနှင့် ကိုက်ညီမှုနှင့် စွမ်းအင် ပြောင်းလဲမှု ထိရောက်မှုကို တွက်ချက်ပေးရန်


### Brand
> Power Station, Inverter, Battery နှင့် အခြား Components များထုတ်လုပ်သည့်ကုမ္ပဏီကို ကိုယ်စားပြုပြီး ပစ္စည်းများ၏ များကို တွက်ချက်ပေးရန်

