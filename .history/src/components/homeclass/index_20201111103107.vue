<template>
<div>
    <div>
        <div class="food"><span>2F</span> {{floorName.floor2}}</div>
        <table class="tab">
            <tr v-for="(itme,index) in floor2" :key="index" style="width:183px;" :class="{'box':index===0}">
                <img :src="itme.image" style="width:185px;">
            </tr>
        </table>
    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            floor1: '',
            floor2: '',
            floor3: '',
            floorName: '',
        }
    },
    components: {},
    methods: {
        getFloor() {
            this.$api.getHome().then(res => {
                // console.log(res);
                this.floor1 = res.data.floor1
                this.floor2 = res.data.floor2
                this.floor3 = res.data.floor3
                this.floorName = res.data.floorName
            }).catch(err => {
                console.log(err);
            })
        },

    },
    mounted() {
        this.getFloor()
    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.tab tr {
    border: 1px solid rgb(231, 225, 225);
    float: left;
}

.box {
    height: 201.8px;
}

.food {
    text-align: center;
    padding: 10px 0;
    font-size: 15px;
    color: #E03730;
    font-weight: 550;
    background-color: #EDEDED;

    span {
        border-radius: 10px;
        background-color: #E03730;
        color: rgb(231, 225, 225);
        font-size: 14px;
    }

}
</style>
