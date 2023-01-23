package features;

import static org.junit.jupiter.api.Assertions.assertEquals;

import com.intuit.karate.Results;
import com.intuit.karate.Runner;
import org.junit.jupiter.api.Test;

class AllRunner {
	@Test
	void testParallel() {
		Results results = Runner.path("classpath:features").karateEnv("dev").parallel(5);
		assertEquals(0, results.getFailCount(), results.getErrorMessages());
	}

}
