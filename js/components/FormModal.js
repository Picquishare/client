Vue.component("form-modal", {
    data: function() {
      return {
          option: '',
          dataImage: {
              caption: '',
              image: '',
              tags: ''
          }
      };
    },
    methods: {
        submitForm() {
            this.dataImage.image = this.$refs.file.files[0]
            console.log('masuk ke form')
            this.$emit('add-submit', this.dataImage)
            this.dataImage.caption = ''
            this.dataImage.image = ''
            this.dataImage.tags = ''
            $('#exampleModal').modal('toggle');
        }
    },
    components: {
        "tags-input": VoerroTagsInput
    },
  
    template: `
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add New Image</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form v-on:submit.prevent="submitForm">
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Caption:</label>
              <input type="text" class="form-control" id="recipient-name" v-model="dataImage.caption">
            </div>
            <div class="form-group">
              <label for="recipient-name" class="col-form-label">Tag:</label>
              <tags-input class="form-control well text-center" element-id="tags" v-model="dataImage.tags"
                :existing-tags="{'web-development': 'Web Development','php': 'PHP','javascript': 'JavaScript',}"
                :typeahead="true"></tags-input>
            </div>
            <div class="form-group">
                <label for="exampleInputFile">File input</label>
                <input type="file" class="mt-3" id="file" ref="file"></input>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" class="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
    `
  });
  
  