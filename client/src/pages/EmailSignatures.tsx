import { Card } from "@/components/ui/card";
import { Mail, Phone, Globe, MapPin, Download, ArrowLeft } from "lucide-react";
import { Link, useParams } from "wouter";
import { Button } from "@/components/ui/button";

interface SignatureProps {
  name?: string;
  title?: string;
  emails: string[];
  phones: string[];
  website: string;
}

const SIGNATURES_DATA: Record<string, SignatureProps> = {
  "general": {
    emails: ["info@siyaphushaconsortium.co.za"],
    phones: ["+27 73 064 1347", "+27 73 256 7948"],
    website: "www.siyaphushaconsortium.co.za"
  },
  "admin": {
    emails: ["admin@siyaphushaconsortium.co.za"],
    phones: ["+27 73 064 1347", "+27 73 256 7948"],
    website: "www.siyaphushaconsortium.co.za"
  },
  "themba": {
    name: "Themba Nkosi",
    title: "Executive Director",
    emails: ["info@siyaphushaconsortium.co.za"],
    phones: ["+27 73 256 7948"],
    website: "www.siyaphushaconsortium.co.za"
  },
  "solomon": {
    name: "Solomon Howard",
    title: "Operations Director",
    emails: ["solly@siyaphushaconsortium.co.za"],
    phones: ["+27 73 064 1347"],
    website: "www.siyaphushaconsortium.co.za"
  }
};

function EmailSignature({ name, title, emails, phones, website }: SignatureProps) {
  const downloadHtml = () => {
    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<style>
  .signature-container {
    font-family: Arial, sans-serif;
    background-color: #000000;
    color: #ffffff;
    padding: 24px;
    max-width: 500px;
    border-left: 4px solid #eab308;
  }
  .flex-container {
    display: flex;
    align-items: center;
    gap: 24px;
  }
  .logo {
    height: 64px;
    width: auto;
  }
  .content {
    flex: 1;
  }
  .name {
    font-weight: 900;
    text-transform: uppercase;
    font-size: 20px;
    margin: 0;
    line-height: 1;
  }
  .title {
    color: #eab308;
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin: 4px 0 12px 0;
  }
  .details {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .detail-item {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #ffffff;
    text-decoration: none;
  }
  .detail-item:hover {
    color: #eab308;
  }
  .icon {
    width: 12px;
    height: 12px;
  }
</style>
</head>
<body>
  <div class="signature-container">
    <div class="flex-container">
      <img src="https://www.siyaphushaconsortium.co.za/logo-white.png" alt="Siyaphusha Logo" class="logo">
      <div class="content">
        ${name ? `<h3 class="name">${name}</h3><p class="title">${title}</p>` : ''}
        <div class="details">
          ${phones.map(p => `<a href="tel:${p.replace(/\s/g, '')}" class="detail-item">${p}</a>`).join('')}
          ${emails.map(e => `<a href="mailto:${e}" class="detail-item">${e}</a>`).join('')}
          <a href="https://${website}" class="detail-item">${website}</a>
          <div class="detail-item" style="opacity: 0.7;">Phola, Ogies, Mpumalanga</div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>`;

    const blob = new Blob([htmlContent], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `signature-${name ? name.replace(/\s+/g, '-').toLowerCase() : emails[0].split('@')[0]}.html`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <Card className="bg-black text-white p-6 max-w-xl border-l-4 border-yellow-500 rounded-none overflow-hidden group relative">
      <button 
        onClick={downloadHtml}
        className="absolute top-4 right-4 p-2 bg-yellow-500 text-black hover:bg-yellow-400 transition-colors rounded-sm opacity-0 group-hover:opacity-100 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest"
      >
        <Download className="w-3 h-3" />
        Download HTML
      </button>
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
        <div className="shrink-0">
          <img 
            src="/attached_assets/Copy_of_SIYAPHUSHA_LOGO_WHITE_(1)_1770260074500.png" 
            alt="Siyaphusha Logo" 
            className="h-16 w-auto"
          />
        </div>
        
        <div className="flex-1 space-y-3">
          {name && (
            <div>
              <h3 className="text-xl font-black uppercase tracking-tight leading-none">{name}</h3>
              <p className="text-yellow-500 text-[10px] font-bold uppercase tracking-[0.2em] mt-1">{title}</p>
            </div>
          )}
          
          <div className="grid grid-cols-1 gap-2 text-xs">
            {phones.map((phone, i) => (
              <a key={i} href={`tel:${phone.replace(/\s/g, '')}`} className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
                <Phone className="w-3 h-3 text-white" />
                <span>{phone}</span>
              </a>
            ))}
            
            {emails.map((email, i) => (
              <a key={i} href={`mailto:${email}`} className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
                <Mail className="w-3 h-3 text-white" />
                <span>{email}</span>
              </a>
            ))}
            
            <a href={`https://${website}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
              <Globe className="w-3 h-3 text-white" />
              <span>{website}</span>
            </a>
            
            <div className="flex items-center gap-2 opacity-70">
              <MapPin className="w-3 h-3 text-white" />
              <span>Phola, Ogies, Mpumalanga</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}

export function SignatureDetail() {
  const { slug } = useParams<{ slug: string }>();
  const signature = SIGNATURES_DATA[slug];

  if (!signature) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center space-y-4">
          <h1 className="text-2xl font-bold">Signature Not Found</h1>
          <Link href="/signatures">
            <Button variant="outline">Back to All Signatures</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        <Link href="/signatures">
          <Button variant="ghost" className="gap-2">
            <ArrowLeft className="w-4 h-4" />
            Back to All
          </Button>
        </Link>
        <h1 className="text-3xl font-black uppercase tracking-tighter">
          {signature.name || "General"} Email Signature
        </h1>
        <EmailSignature {...signature} />
      </div>
    </div>
  );
}

export function EmailSignatures() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-black uppercase tracking-tighter">Corporate Email Signatures</h1>
        
        <div className="grid sm:grid-cols-2 gap-4">
          {Object.entries(SIGNATURES_DATA).map(([slug, sig]) => (
            <Link key={slug} href={`/signatures/${slug}`}>
              <Card className="p-6 hover:border-yellow-500 transition-colors cursor-pointer group">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-bold uppercase">{sig.name || slug}</h3>
                    <p className="text-xs text-gray-500 uppercase tracking-widest">{sig.title || "Corporate"}</p>
                  </div>
                  <ArrowLeft className="w-4 h-4 rotate-180 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
