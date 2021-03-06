
// Import the core angular services.
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

// Import the application components and services.
import { AppComponent } from "./app.component";
import { WidgetComponent } from "./widget.component";

// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //

@NgModule({
	imports: [
		BrowserModule
	],
	bootstrap: [
		AppComponent
	],
	declarations: [
		AppComponent,
		WidgetComponent
	]
})
export class AppModule {
	// ...
}
