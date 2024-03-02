/** @format */

const loadCatagory = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories"
  );
  const data = await res.json();

  // show catagory in the conatainer
  const catagoryContainer = document.getElementById("catagoryContainer");
  data.data.news_category.forEach((catagory) => {
    console.log(catagory);
    const btn = document.createElement("button");
    btn.addEventListener('click', () => {
      const divContainer = document.getElementById("div-container");
      divContainer.innerHTML = ''
      newLoad(catagory.category_id)
    })
    btn.classList = `btn btn-active`;
    const catagoryName = catagory.category_name;
    btn.innerText = catagoryName;
    
    catagoryContainer.appendChild(btn);
  });
};

// new laod here

const newLoad = async (id) => {
  const res = await fetch(
    `https://openapi.programming-hero.com/api/news/category/${id}`
  );
  const data = await res.json();
  const singleData = data.data;
  displayNews(singleData);
};
const displayNews = (allNews) => {
  allNews.forEach((news) => {
    const div = document.createElement("div");
    div.classList = `flex gap-5 bg-slate-200 p-5 mb-5 rounded-lg`;
    const divContainer = document.getElementById("div-container");
   
    div.innerHTML = `
        <figure class=" w-[40%]">
                    <img class="w-full rounded" src="${news.thumbnail_url}" alt="Movie"/>
                </figure>
                <div class="">
                  <h2 class="card-title">${news.title}</h2>
                  <p class="mb-3 text-[#949494]">From our favourite UK influencers to the best missives from Milan and the coolest New Yorkers, read on some of the best fashion blogs out there, and for even more inspiration, do head to our separate black fashion influencer round-up.
                </p>
                  <p class="text-[#949494]">Fancy some shopping deals? Check out these amazing sales: Zara Black Friday, ASOS Black Friday, Missoma Black Friday and Gucci Black Friday...
                </p>
                  <div class="flex justify-between items-center mt-5">
                    <div>
                        <div class="flex gap-1 items-center">
                            <img class="w-[60px] h-[60px] rounded-full" src="${news.author.img}" alt="">
                            <div>
                                <h4 class="font-semibold">${news.author.name}</h4>
                                <h5 class="text-[#949494]">${news.author.published_date} </h5>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-1">
                        <img src="./image/carbon_view.png" alt="">
                        <h5 class="font-semibold">${news.total_view}k views</h5>
                    </div>
                    <div>
                        <img src="./image/Group 116134.png" alt="">
                    </div>
                    <div>
                        <img src="./image/bi_arrow-right-short.png" alt="">
                    </div>
                  </div>
                </div>
        `;
    divContainer.appendChild(div);
    console.log(news);
    
  });
};
newLoad('02');

loadCatagory();
