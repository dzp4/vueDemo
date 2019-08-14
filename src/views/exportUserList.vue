<template>
    <div>
        <el-button type="primary" @click="exportExcel">download<i class="el-icon-download el-icon--right"></i></el-button>
    </div>
</template>


<script>
export default {
     methods:{
        exportExcel(){
            let url = "/user/getUserInfo";
            this.$ajax({
                method:'post',
                url:url,
                responseType: 'blob'
            }).then(res=>{
                const blob = new Blob([res.data],{type: 'application/vnd.ms-excel'});
                let filename ='用户信息.xls';
                const elink = document.createElement('a');
                elink.download = filename;
                elink.style.display = 'none';
                elink.href = URL.createObjectURL(blob);
                document.body.appendChild(elink);
                elink.click();
                URL.revokeObjectURL(elink.href); // 释放URL 对象
                document.body.removeChild(elink);
            }).catch(res=>{
                console.log(res);
            })
        }
    }
}
</script>