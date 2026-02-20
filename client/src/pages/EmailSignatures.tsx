import { Card } from "@/components/ui/card";
import { Mail, Phone, Globe, MapPin } from "lucide-react";

interface SignatureProps {
  name?: string;
  title?: string;
  emails: string[];
  phones: string[];
  website: string;
}

function EmailSignature({ name, title, emails, phones, website }: SignatureProps) {
  return (
    <Card className="bg-black text-white p-6 max-w-xl border-l-4 border-yellow-500 rounded-none overflow-hidden">
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

export function EmailSignatures() {
  const commonPhones = ["+27 73 064 1347", "+27 73 256 7948"];
  
  return (
    <div className="min-h-screen bg-gray-100 p-8 space-y-12">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-black uppercase tracking-tighter">Corporate Email Signatures</h1>
        
        <div className="space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">General & Admin</h2>
          <div className="grid gap-6">
            <EmailSignature 
              emails={["info@siyaphushaconsortium.co.za"]} 
              phones={commonPhones}
              website="www.siyaphushaconsortium.co.za"
            />
            <EmailSignature 
              emails={["admin@siyaphushaconsortium.co.za"]} 
              phones={commonPhones}
              website="www.siyaphushaconsortium.co.za"
            />
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-gray-500">Executive Leadership</h2>
          <div className="grid gap-6">
            <EmailSignature 
              name="Themba Nkosi"
              title="Executive Director"
              emails={["info@siyaphushaconsortium.co.za"]}
              phones={["+27 73 256 7948"]}
              website="www.siyaphushaconsortium.co.za"
            />
            <EmailSignature 
              name="Solomon Howard"
              title="Operations Director"
              emails={["solly@siyaphushaconsortium.co.za"]}
              phones={["+27 73 064 1347"]}
              website="www.siyaphushaconsortium.co.za"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
