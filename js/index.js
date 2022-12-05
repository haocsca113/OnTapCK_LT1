$(document).ready(function(){
    $("#myBtn").click(function(){
        $("#myModal").modal();
    })

    // Kiem tra so serial
    var txtSerial = $("#txtSerial");
    var tbSerial = $("#tbSerial");
    function kiemTraSerial(){
        // var kt = /(^[A-Z]{1})([a-z]+)(\s[A-Z]{1}([a-z]+))*$/;
        var kt1 = /^[a-zA-Z0-9_-]{6,}$/;
        if(txtSerial.val() == ""){
            tbSerial.html("*Bắt buộc nhập");
            return false;
        }
        if(!kt1.test(txtSerial.val())){
            tbSerial.html("*Nhập từ 6 kí tự trở lên");
            return false;
        }
        tbSerial.html("*");
        return true;
    }
    txtSerial.blur(kiemTraSerial);

    // Kiem tra Mo Ta
    var txtMota = $("#txtMota");
    var tbMota = $("#tbMota");

    // Kiem tra Trong Luong
    var txtKG = $("#txtKG");
    var tbKG = $("#tbKG");
    function kiemTraKG(){
        var ktKG = /^[1-9]\d*(\.\d+)?$/;
        if(txtKG.val() == ""){
            tbKG.html("*Bắt buộc nhập");
            return false;
        }
        if(!ktKG.test(txtKG.val())){
            tbKG.html("*Phải > 0");
            return false;
        }
        tbKG.html("*");
        return true;
    }
    txtKG.blur(kiemTraKG);
    txtKG.blur(function(){
        var tong = 0;
        if(txtKG.val() <= 20){
            tong += (35000 * txtKG.val()); 
        }
        else if(txtKG.val() > 20 && txtKG.val() <= 50){
            tong += (30000 * txtKG.val());
        }
        else{
            tong += (15000 * txtKG.val());
        }
        return $("#txtVND").val(tong); 
    })

    // btn Save
    var i = 2;
    $("#btnSave").click(function(){
        // alert('HI')
        var SoSerial = txtSerial.val();
        var MoTa = txtMota.val();
        var anh = $("#txtAnh").val().substring(12);
        var KG = txtKG.val();
        var VND = $("#txtVND").val();
        var them = "<tr><td>" + (i++) + "</td><td>" + SoSerial + "</td><td>" + MoTa + "</td><td>" + anh + "</td><td>" + KG + "</td><td>" + VND + "</td></tr>";

        $("#myModal").modal("hide");
        $("table tbody").append(them);

        return true;
    })
})