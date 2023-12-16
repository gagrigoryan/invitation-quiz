import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider } from "baseui";
import { PageLayout } from "./components/page-layout";
import { HomePage } from "./pages/home-page";
import { createTheme } from "./styles/theme";

const engine = new Styletron();
const theme = createTheme(engine);

function App() {
  return (
    <StyletronProvider value={engine}>
      <BaseProvider theme={theme}>
        <PageLayout>
          <HomePage />
        </PageLayout>
      </BaseProvider>
    </StyletronProvider>
  );
}

export default App;
