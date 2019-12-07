<template>
  <div class="card-spacer">
    <div class="card">
      <div class="card-content">
        <div class="media media-header">
          <div class="media-left">
            <figure class="image is-48x48">
              <!--src は画像固定URL/Userに紐づく何かで取れるようにしておく。今はサンプル-->
              <img
                src="https://bulma.io/images/placeholders/96x96.png"
                alt="Placeholder image"
                class="is-rounded"
              />
            </figure>
          </div>
          <div class="media-content">
            <p class="item-title">
              {{ cardContent.title }}
            </p>
            <p class="subtitle is-6">
              <span>
                {{ cardContent.user }}
              </span>
              <span>(@{{ cardContent.userId }})</span>
            </p>
            <div class="content">
              <!-- コメント -->
              {{ cardContent.comment }}
            </div>
            <!-- 写真 -->
            <p>
              <img
                v-for="(imageUrl, index) in cardContent.images"
                :key="index"
                :src="imageUrl"
                alt="ss image"
                class="ss-content"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TimeLineCard',
  props: {
    cardContent: { type: Object, required: true }
  }
}
</script>

<style scoped lang="scss">
.card-spacer {
  margin: 0.5rem 0;
}
.card-content {
  padding: 0.5rem;
}
.media-header {
  margin-bottom: 0 !important;
}
.subtitle {
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
}
.media-content .content {
  line-height: 1.25;
}
.item-title {
  font-weight: bold;
}
.user-text {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.ss-content {
  margin: 0 0.25rem;
}
</style>
