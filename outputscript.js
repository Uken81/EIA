let listArray;
//converts the key list from script.js back to an array.
const backToArray = () => {
    const listString = localStorage.getItem("list");
    listArray = listString.split(',');
    console.log(listString);
    console.log(listArray);
}

const renderValue = () => {
    backToArray();
    listArray.forEach(function (entry) {
        let placeHereReference = `customer-${entry}`;
        let placeHere = document.getElementById(placeHereReference);
        let keyValue = localStorage.getItem(entry);
        placeHere.innerHTML = keyValue;
        console.log(placeHere);
        console.log(keyValue);
    })
}
renderValue();

function getPDF() {
    const renderLocation = document.getElementById("output-page1");
    renderLocation.style.opacity = 10;

    function getWidth() {
        return Math.max(
            document.body.scrollWidth,
            document.documentElement.scrollWidth,
            document.body.offsetWidth,
            document.documentElement.offsetWidth,
            document.documentElement.clientWidth
        );
    }

    function getHeight() {
        return Math.max(
            document.body.scrollHeight,
            document.documentElement.scrollHeight,
            document.body.offsetHeight,
            document.documentElement.offsetHeight,
            document.documentElement.clientHeight
        );
    }

    const HTML_Width = getWidth();
    const HTML_Height = getHeight();
    console.log(HTML_Width);
    console.log(HTML_Height);

    const top_left_margin = 15;
    const PDF_Width = HTML_Width + (top_left_margin * 2);
    const PDF_Height = (PDF_Width * 1.5) + (top_left_margin * 2);
    const canvas_image_width = HTML_Width;
    const canvas_image_height = HTML_Height;

    const totalPDFPages = Math.ceil(HTML_Height / PDF_Height) - 1;


    html2canvas(document.getElementById("output-page1")).then(function (canvas) {
        canvas.getContext('2d');

        console.log(canvas.height + "  " + canvas.width);


        const imgData = canvas.toDataURL("image/jpeg", 1.0);
        const pdf = new jsPDF('p', 'pt', [PDF_Width, PDF_Height]);
        pdf.addImage(imgData, 'JPG', top_left_margin, top_left_margin, canvas_image_width, canvas_image_height);


        for (var i = 1; i <= totalPDFPages; i++) {
            pdf.addPage(PDF_Width, PDF_Height);
            pdf.addImage(imgData, 'JPG', top_left_margin, -(PDF_Height * i) + (top_left_margin * 4), canvas_image_width, canvas_image_height);
        }
        const address = localStorage.getItem("address");
        pdf.save(`audit_${address}.pdf`);
    });
    renderLocation.style.opacity = 0;
};