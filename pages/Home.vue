<template>
  <div>
    <h1>Homeコンポーネント</h1>
    <TimeLineCard
      v-for="(item, index) in timeLineItem"
      :key="index"
      :card-content="item"
      style="min-width: 100%"
    />
  </div>
</template>

<script>
import TimeLineCard from '@/components/TimeLineCard'
export default {
  name: 'Home',
  components: {
    TimeLineCard
  },
  data: () => {
    return {
      timeLineItem: [
        {
          id: 111,
          user: 'test1',
          userId: '12345667',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          like: 3,
          images: [
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png'
          ]
        },
        {
          id: 112,
          user: 'test2',
          userId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          like: 3,
          images: [
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png'
          ]
        },
        {
          id: 112,
          user: 'test2',
          userId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          like: 3,
          images: [
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png'
          ]
        },
        {
          id: 112,
          user: 'test2',
          userId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          like: 3,
          images: [
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png'
          ]
        },
        {
          id: 112,
          user: 'test2',
          userId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          like: 3,
          images: [
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png'
          ]
        },
        {
          id: 112,
          user: 'test2',
          userId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          like: 3,
          images: [
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png'
          ]
        },
        {
          id: 112,
          user: 'test2',
          userId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          like: 3,
          images: [
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png'
          ]
        },
        {
          id: 112,
          user: 'test2',
          userId: '2312',
          title: 'テストな投稿',
          comment: '全ユーザーが見れるコメント',
          like: 3,
          images: [
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png'
          ]
        },
        {
          id: 112,
          user: 'test2',
          userId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          like: 3,
          images: [
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png'
          ]
        },
        {
          id: 112,
          user: 'test2',
          userId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          like: 3,
          images: [
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png',
            'https://bulma.io/images/placeholders/96x96.png'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.time-line-area {
  /*横幅は常にmax*/
  width: 100%;
}
</style>
