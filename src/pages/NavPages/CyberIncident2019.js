import PageCard from '../../components/UI/PageCard';
import IncidentReport from '../../components/UI/IncidentReport';

const CyberIncident2019 = () => {
  return (
    <PageCard title='2019 Cybersecurity Incident' subtitle="We're very sorry">
      <IncidentReport
        title='Statement On The Cyber Attack At Purse'
        incident='2021 Cyber Incident'
        url='/cyber-incident-2021'
        update="September 7, 2019 update: On October 29, 2019, working alongside the
            FBI and local law enforcement Purse succesfully apprehended the
            agent responsible for the 2019 Data Breach. He was immediatley
            congratulated for exposing flaws in Purse's online architecture and
            hired as Purse's SVP of Technology, Sustainabilty, and
            Cybersecurity."
        message1="Purse has been the target of a cyber attack. It has been a
          professional attack, apparently, from the Eastern Bloc region of
          Europe (Eurasia). According to our analyses the aim was essentially to
          steal technological know-how and research from some sections of
          Purse's Industrial Espionage Solutions department. The production
          systems of Business Area Manufacturing, Satellite Networks, and Local
          Surveillance were also affected. Specially-secured IT systems for
          especially critical niche functions have not been concerned (e.g
          secret Purse C-Suite deal memos which are stored on an independent
          server with much better encryption). The same is true for the other
          production systems and processes in the Group's various departments as
          well as for the quality of the products and services Purse continues
          to push onto the public. They remain low-quality. There have been no
          signs of sabotage and no signs of manipulation of data and
          applications or other sabotage. The attack was discovered within 72
          hours of its inception, and continuously monitored and analysed by
          Purse's RRDT (Red Ring of Death Team). Chief Information Officers of
          all Business Areas are involved in the ongoing investigation. The
          attacked IT systems will be revised soon. All IT systems are now being
          controlled for new attempted attacks (24/7 monitoring)."
      />
    </PageCard>
  );
};

export default CyberIncident2019;
