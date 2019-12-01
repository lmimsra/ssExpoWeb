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
          owner: 'test1',
          ownerId: '12345667',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          publishTime: '2019-05-09 12:30:00',
          limitTime: '2019-09-09 12:30:00',
          participants: [
            { id: 123, name: 'おらおら', status: 3 },
            { id: 223, name: 'われわれ', status: 1 }
          ]
        },
        {
          id: 112,
          owner: 'test2',
          ownerId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          publishTime: '2019-05-09 12:30:00',
          limitTime: '2019-10-09 12:30:00',
          participants: [
            { id: 123, name: 'おらおら', status: 3 },
            { id: 223, name: 'われわれ', status: 1 }
          ]
        },
        {
          id: 112,
          owner: 'test2',
          ownerId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          publishTime: '2019-05-09 12:30:00',
          limitTime: '2019-10-09 12:30:00',
          participants: [
            { id: 123, name: 'おらおら', status: 3 },
            { id: 223, name: 'われわれ', status: 1 }
          ]
        },
        {
          id: 112,
          owner: 'test2',
          ownerId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          publishTime: '2019-05-09 12:30:00',
          limitTime: '2019-10-09 12:30:00',
          participants: [
            { id: 123, name: 'おらおら', status: 3 },
            { id: 223, name: 'われわれ', status: 1 }
          ]
        },
        {
          id: 112,
          owner: 'test2',
          ownerId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          publishTime: '2019-05-09 12:30:00',
          limitTime: '2019-10-09 12:30:00',
          participants: [
            { id: 123, name: 'おらおら', status: 3 },
            { id: 223, name: 'われわれ', status: 1 }
          ]
        },
        {
          id: 112,
          owner: 'test2',
          ownerId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          publishTime: '2019-05-09 12:30:00',
          limitTime: '2019-10-09 12:30:00',
          participants: [
            { id: 123, name: 'おらおら', status: 3 },
            { id: 223, name: 'われわれ', status: 1 }
          ]
        },
        {
          id: 112,
          owner: 'test2',
          ownerId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          publishTime: '2019-05-09 12:30:00',
          limitTime: '2019-10-09 12:30:00',
          participants: [
            { id: 123, name: 'おらおら', status: 3 },
            { id: 223, name: 'われわれ', status: 1 }
          ]
        },
        {
          id: 112,
          owner: 'test2',
          ownerId: '2312',
          title: 'テストな投稿',
          comment: '全ユーザーが見れるコメント',
          publishTime: '2019-05-09 12:30:00',
          limitTime: '2019-10-09 12:30:00',
          participants: [
            { id: 123, name: 'おらおら', status: 3 },
            { id: 223, name: 'われわれ', status: 1 }
          ]
        },
        {
          id: 112,
          owner: 'test2',
          ownerId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          publishTime: '2019-05-09 12:30:00',
          limitTime: '2019-10-09 12:30:00',
          participants: [
            { id: 123, name: 'おらおら', status: 3 },
            { id: 223, name: 'われわれ', status: 1 }
          ]
        },
        {
          id: 112,
          owner: 'test2',
          ownerId: '2312',
          title: 'テスト投稿',
          comment: '全ユーザーが見れるコメント',
          publishTime: '2019-05-09 12:30:00',
          limitTime: '2019-10-09 12:30:00',
          participants: [
            { id: 123, name: 'おらおら', status: 3 },
            { id: 223, name: 'われわれ', status: 1 }
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
