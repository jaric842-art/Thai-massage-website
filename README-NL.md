# Koya Thai Massage — GitHub/Netlify-bronpakket

Dit is **één compleet bronpakket** op basis van de oorspronkelijke websitecode. De bestaande structuur, diensten, prijzen, boekingssectie, logo en de zes door de klant aangeleverde salonfoto’s zijn behouden. De verlopen CloudFront-achtergronden zijn vervangen door drie nieuwe, lokaal meegeleverde jungle-/spa-beelden. De foto’s worden dus met de website gepubliceerd; er is geen oude afbeeldingsaccount of externe afbeeldingslink nodig.

## Dit pakket naar GitHub en Netlify brengen

1. Pak de ZIP uit op je computer.
2. Zet **de inhoud** van de uitgepakte map in de hoofdmap van je GitHub-repository en push de bestanden. Upload de ZIP niet als één los bestand in de repository.
3. Koppel die repository aan Netlify via **Add new site → Import an existing project**. `netlify.toml` stelt de build in: `pnpm run build`, publiceren uit `dist/public`, met Node.js 22.
4. Laat Netlify de build uitvoeren. De websitebestanden en afbeeldingen worden samen gebouwd; je hoeft de foto’s niet apart te uploaden.

## Beeldbestanden

Alle bestanden staan in `client/public/images/`. De site gebruikt de klantfoto’s onder `thai-massage.jpg`, `salon-welcome.jpg`, `massage-bed.jpg`, `hot-stone-massage.jpg`, `salon-atmosphere.jpg` en `massage-session.jpg`; daarnaast staan het logo en de drie nieuwe achtergronden in dezelfde map. Geen van de salonfoto’s wordt dubbel gebruikt in de afbeeldingssecties.

**Belangrijk over de hero-foto:** de oorspronkelijke ZIP bevatte wel de websitecode en een verwijzing naar een CloudFront-afbeelding, maar niet het originele hero-afbeeldingsbestand zelf. Omdat die oude URL niet meer werkt, is er een nieuwe passende jungle-Thaise-massageachtergrond gemaakt; die is niet de exact oorspronkelijke foto.

Deze ZIP is een bronpakket om via GitHub en Netlify te bouwen. De tijdelijke preview is apart en de bestaande live site op `koyathaimassage.com` is hiermee niet gewijzigd.
