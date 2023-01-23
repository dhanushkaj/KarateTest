package features.api;

import com.intuit.karate.junit5.Karate;

public class TestRunner {

	@Karate.Test
	Karate testSample() {
		return Karate.run("postapi").relativeTo(getClass());
	}

	@Karate.Test
	Karate testTags() {
		return Karate.run("postapi").tags("@first").relativeTo(getClass());
	}

	@Karate.Test
	Karate testSystemProperty() {
		return Karate.run("classpath:features/api/postapi.feature").tags("@second").karateEnv("e2e").systemProperty("foo",
				"bar");
	}
}
