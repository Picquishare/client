Vue.component('tag-row', {
    props: ['allTag'],
    methods: {
        clickTag(tag) {
            this.$emit('click-tag', tag)
        }
    },
    template: `

    <div class="row container">
        <div class="Instagram-card" v-for="item in allTag">
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
                    <a href="" v-on:click.prevent="clickTag(tag)">{{ tag }}</a>
                </div>
            </div>
      </div>
    </div>

    `
})