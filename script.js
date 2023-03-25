const codeReader = new ZXing.BrowserQRCodeReader();

codeReader.getVideoInputDevices()
    .then((videoInputDevices) => {
        if (videoInputDevices.length > 0) {
            const sourceSelect = document.createElement("select");
            sourceSelect.setAttribute("id", "sourceSelect");
            document.body.appendChild(sourceSelect);

            videoInputDevices.forEach((device) => {
                const sourceOption = document.createElement("option");
                sourceOption.setAttribute("value", device.deviceId);
                sourceOption.text = device.label;
                sourceSelect.appendChild(sourceOption);
            });

            const selectListener = () => {
                codeReader.decodeFromVideoDevice(selectedDeviceId, "preview")
                    .then((result) => {
                        console.log(result);
                        alert(result.text);
                    })
                    .catch((error) => {
                        console.error(error);
                        alert("QRコードが見つかりませんでした。カメラの設定を確認してください。");
                    });
            };

            sourceSelect.addEventListener("change", selectListener);

            const startListener = () => {
                selectedDeviceId = sourceSelect.value;
                codeReader.decodeFromVideoDevice(selectedDeviceId, "preview")
                    .then((result) => {
                        console.log(result);
                        alert(result.text);
                    })
                    .catch((error) => {
                        console.error(error);
                        alert("QRコードが見つかりませんでした。カメラの設定を確認してください。");
                    });
            };

            const startButton = document.createElement("button");
            startButton.setAttribute("id", "startButton");
            startButton.innerText = "QRコード読み取り開始";
            document.body.appendChild(startButton);
            startButton.addEventListener("click", startListener);

            let selectedDeviceId;
        } else {
            alert("カメラが見つかりませんでした。");
        }
    })
    .catch((error) => {
        console.error(error);
        alert("カメラが見つかりませんでした。");
    });
