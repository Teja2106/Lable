import { useEffect, useRef, useState } from 'react';
import QRCodeStyling, { FileExtension } from 'qr-code-styling';

const qrCode = new QRCodeStyling({
  width: 225,
  height: 225,
  image: 'https://opaq.pages.dev/assets/whitebg.png',
  dotsOptions: {
    color: '#00000',
    type: 'extra-rounded'
  },
  imageOptions: {
    crossOrigin: 'anonymous',
    margin: 5
  }
});

export default function Qrcode() {
  const [url, setUrl] = useState('label.opaq.tech/88933-uu22-AP69');
  const [fileExt, setFileExt] = useState<FileExtension>('png');
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) { // Check if ref.current is not null 
      qrCode.append(ref.current);
    }
  }, []);

  useEffect(() => {
    qrCode.update({
      data: url
    });
  }, [url]);

  const onUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setUrl(event.target.value);
  };

  const onExtensionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFileExt(event.target.value as FileExtension);
  };

  const onDownloadClick = () => {
    qrCode.download({
      extension: fileExt
    });
  };

  return (
    <div className="App">
      <div style={styles.inputWrapper}>
        <input
          value={url}
          onChange={onUrlChange}
          style={styles.inputBox}
          placeholder="Enter URL"
          hidden
        />
        {/* <select onChange={onExtensionChange} value={fileExt} hidden>
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="webp">WEBP</option>
        </select>
        <button onClick={onDownloadClick}>Download</button> */}
      </div>
      <div ref={ref} />
    </div>
  );
}

const styles = {
  inputWrapper: {
    margin: '20px 0',
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%'
  },
  inputBox: {
    flexGrow: 1,
    marginRight: 20,
    padding: '8px',
    border: '1px solid #ccc',
    borderRadius: '9px'
  }
};