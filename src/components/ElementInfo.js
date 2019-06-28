import React from "react";
import { styled } from "@material-ui/styles";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { getAllTemperatures } from "api/temperature";

const Container = styled("div")({
  display: "flex",
  flexFlow: "column nowrap",
  alignItems: "stretch",
  flexGrow: 1,
  overflow: "auto"
});

function titleCase(text) {
  if(typeof text !== "string" || !text)
    return text;
  return text.toLowerCase()
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function Row({title = "", value, unit = null}) {
  if(value == null) return null;
  return (
    <TableRow>
      <TableCell>{title}</TableCell>
      <TableCell colSpan={3}>{value} {unit}</TableCell>
    </TableRow>
  )
}

function TempRow({title = "", temperature}) {
  if (temperature == null) return null;
  const { k, c, f } = getAllTemperatures(temperature);
  return (
    <TableRow>
      <TableCell>{title}</TableCell>
      <TableCell>{k}</TableCell>
      <TableCell>{c}</TableCell>
      <TableCell>{f}</TableCell>
    </TableRow>
  )
}

export default function ElementInfo({element}) {
  return (
    <Container>
      <Table size="small">
        <TableBody>
          <Row title="Summary" value={element.summary} />
          <Row title="Category" value={titleCase(element.category)} />
          <Row title="Atomic Mass" value={element.atomic_mass} />
          <Row title="Appearance" value={titleCase(element.appearance)} />
          <Row title="Phase" value={element.phase} />
          <TempRow title="Melting Point" temperature={element.melt} />
          <TempRow title="Boiling Point" temperature={element.boil} />
          <Row title="Density" value={element.density} unit="g/L" />
          <Row title="Molar Heat" value={element.molar_heat} unit="mol*K" />
          <Row title="Electron Configuration" value={element.electron_configuration} />
          <Row title="Eletronegativity" value={element.electronegativity_pauling} unit="(Pauling Scale)" />
          <Row title="First Electron Affinity" value={element.electron_affinity} unit="kJ/mol" />
          {
            element.ionization_energies 
            && element.ionization_energies.length 
            && element.ionization_energies.map((energy, idx) => (
              <Row key={`en-${idx}`} title={idx === 0 ? "Ionization Energies" : ""} value={energy} unit="kJ/mol" />
            ))
          }
        </TableBody>
      </Table>
    </Container>
  )
}