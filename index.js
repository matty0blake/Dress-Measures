//Button & Event Listner

document
    .querySelector("#dress_type")
    .addEventListener("click", (e) => selectingDressType(e.target));

document
    .querySelector("#submittingBtn")
    .addEventListener("click", () => submittingInputs());

// Functions
const selectingDressType = (clickedElement) => {
    let dress_type = document.querySelector("#dress_type");
    let listOfOptions = Object.values(dress_type.children);

    // changing all selected value = false
    listOfOptions.forEach((element) => {
        let reseting = element.setAttribute("selected", "false");
    });

    if (clickedElement.tagName === "P") {
        clickedElement = clickedElement.parentElement;
    }

    //setting clicked Element attribute (selected="true")
    clickedElement.setAttribute("selected", "true");
};

const submittingInputs = () => {
    let dress_type = () => {
        let types = document.querySelector("#dress_type").children;
        types = Object.values(types);
        let selected;
        types.forEach((e) => {
            let check = e.getAttribute("selected");

            if (check === "true") {
                selected = e.getAttribute("value");
            } else {
            }
        });

        return selected;
    };

    dress_type = dress_type();
    let weight = document.querySelector("#weight").value;
    let height = document.querySelector("#height").value;

    const orgnizedData = {
        dress_type: dress_type,
        height: height,
        weight: weight,
        height_to_weight: height - 100 - weight,
    };

    console.log(orgnizedData);
};

const printingResult = ([pro, res]) => {
    let DIV_print = document.createElement("div");
    DIV_print.classList.add("print");

    let P_res = document.createElement("p");
    P_res.classList.add("outPutValue");
    P_res.innerText = res;

    let P_pro = document.createElement("p");
    P_pro.classList.add("outPutProperty");
    P_pro.innerText = pro;

    DIV_print.appendChild(P_res);
    DIV_print.appendChild(P_pro);
    document.querySelector("#outPut").appendChild(DIV_print);
};

printingResult(["باڵا", "200"]);
printingResult(["کێش", "50"]);
printingResult(["درێژی قۆڵ", "70"]);
printingResult(["درێژی قۆڵ", "70"]);
printingResult(["درێژی قۆڵ", "70"]);
