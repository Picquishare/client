Vue.component('image-row', {
    props: ['allImage'],
    template: `

    <div class="row container">
        <div class="Instagram-card" v-for="item in allImage">
            <div class="Instagram-card-header">
                <p>{{item.UserId.firstName}} {{item.UserId.lastName}}</p>
            </div>
        
            <div class="Instagram-card-image">
            <img v-bind:src="item.imageLink"/>
            </div>

            <div class="sharethis-inline-share-buttons" v-bind:data-url="item.imageLink" data-title="Look at this awesome picture!"></div>

            <div class="Instagram-card-content well text-center">
                <p>{{item.caption}}</p>
                <hr>
            </div> 
            <div class="list-tags">  
                <div class="tags-content" v-for="tag in item.tags">
                    <a href="">{{ tag }}</a>
                </div>
            </div>
      </div>
    </div>

    `
})