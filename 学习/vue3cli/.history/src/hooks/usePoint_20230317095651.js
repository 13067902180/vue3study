import { onBeforeMount, onMounted, reactive } from "vue";
function savePoint() {
    // 实现鼠标打点相关的数据
    let point = reactive({
        x: 0,
        y: 0,
    });
    // 实现鼠标打点相关的方法
    function savePoints(event) {
        point.x = event.pageX;
        point.y = event.pageY;
        console.log(event.pageX, event.pageY);
    }
    // 实现鼠标打点相关的钩子
    onMounted(() => {
        window.addEventListener("click", savePoints);
    });
    onBeforeMount(() => {
        window.removeEventListener("click", savePoints);
    });
    return point
}
export default savePoint