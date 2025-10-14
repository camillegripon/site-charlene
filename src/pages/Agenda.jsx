export default function Agenda() {
  return (
    <div className="Agenda">
      <iframe
        title="Prise de rendez-vous"  // Obligatoire pour l'accessibilité
        src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3hSuQWqyZxVhwV1DZeoujHJc6JumFknucvJOrBgc5BJB1OAfgSJtLGjoFA8wbINPZWRGy3cB1_?gv=true"
        style={{ border: 0 }}  // Syntax JSX : objet entre accolades
        width="100%"
        height="600"
        frameBorder="0"       // camelCase en JSX
      />
    </div>
  );
}
