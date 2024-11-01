function main() {

    function func() {
        // ----------------------24k-----------------
        var int1 = document.getElementById("24k").value;
        document.getElementById("r24k").innerHTML = int1;
        y = Math.ceil(int1 / 11.664);
        z = int1 / 24;
        document.getElementById("24/g").innerHTML = y;
        var int3 = document.getElementById("jw").value;
        var mak1 = document.getElementById("making").value;
        var mak = Math.ceil(mak1);
        var sum = Math.ceil((int3 * y)) + mak;
        document.getElementById("24k_jp").innerHTML = sum;
        // -----------------21k-----------------
        twenty_one_k = Math.ceil(z * 21);
        document.getElementById("21k").innerHTML = twenty_one_k;
        per_g = Math.ceil(twenty_one_k / 11.664);
        document.getElementById("21k/g").innerHTML = per_g;
        var int3 = document.getElementById("jw").value;
        var mak1 = document.getElementById("making").value;
        var mak = Math.ceil(mak1);
        document.getElementById("21k_jp").innerHTML = Math.ceil((int3 * per_g)) + mak;

        // -----------------22k-----------------
        twenty_one_k = Math.ceil(z * 22);
        document.getElementById("22k").innerHTML = twenty_one_k;
        per_g = Math.ceil(twenty_one_k / 11.664);
        document.getElementById("22k/g").innerHTML = per_g;
        var int3 = document.getElementById("jw").value;
        var mak1 = document.getElementById("making").value;
        var mak = Math.ceil(mak1);
        document.getElementById("22k_jp").innerHTML = Math.ceil((int3 * per_g)) + mak;


        // -----------------18k-----------------
        twenty_one_k = Math.ceil(z * 18);
        document.getElementById("18k").innerHTML = twenty_one_k;
        per_g = Math.ceil(twenty_one_k / 11.664);
        document.getElementById("18k/g").innerHTML = per_g;
        var int3 = document.getElementById("jw").value;
        var mak1 = document.getElementById("making").value;
        var mak = Math.ceil(mak1);
        document.getElementById("18k_jp").innerHTML = Math.ceil((int3 * per_g)) + mak;

    }
    func();

    // function twenty_one_k() {
    //     // twenty_one_k = z * 21;
    //     // document.getElementById("21k").innerHTML = twenty_one_k;

    // }
    // // twenty_one_k();

    // function twenty_one_k_per_gram() {
    //     // per_g = Math.floor(twenty_one_k / 11.664);
    //     // document.getElementById("21k/g").innerHTML = per_g;
    // }
    // // twenty_one_k_per_gram();


}
main();