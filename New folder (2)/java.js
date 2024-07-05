const box=[
{
Name:`Bracelet`,
description:`The fine line Jewerlly`,
Price:`2000`,
},
{
    Name:`Bracelet`,
    description:`The fine line Jewerlly`,
    Price:`2000`,
    },
    {
        Name:`Bracelet`,
        description:`The fine line Jewerlly`,
        Price:`2000`,
        }

]
let boxs=document.getElementById(`box`);

for(let i=0; i<box.length; i++){boxs.innerHTML+=
`<div class="card" style="width: 18rem;">
<img src="k.jpg" class="card-img-top" alt="...">
<div class="card-body">
   <h5 class="card-title">${box[i] . Name} </h5>
  <p class="card-text">${box[i] . description}</p>
  <p class="card-text">${box[i]. Price}</p>
</div>
</div>`
}

console.log('box')
