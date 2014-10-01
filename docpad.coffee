# DocPad Configuration File
# http://docpad.org/docs/config

# Define the DocPad Configuration
docpadConfig = {
	templateData:
		site:
			title: "Berlin Rethinking Crisis Conference",
			description:"""
			A conference to disscuss the global crisis of capitalism."""
			keywords: """
			Crisis, Capitalism, Nancy Fraser, Political Theory, Marxism, Socialism, Ecology
			Society, Democracy, Critical Theory, Political Philosophy, Critical Sociology, 
			Economy, Social Reproduction, Feminism, Slavery, Einstein Stiftung, John F. 
			Kennedy Institute, Berlin Free University, New School for Social Research, Berlin """

	environments:
		development:
			templateData:
				site:
					url: "http://localhost:9778"
		static:
			templateData:
				site:
					url: "http://berlincrisis.info"

}

# Export the DocPad Configuration
module.exports = docpadConfig